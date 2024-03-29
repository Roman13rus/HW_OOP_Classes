export default class Character {
  constructor(name, type) {
    const types = ['Bowerman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
    if (typeof name === 'string' && (name.length >= 2 && name.length <= 10)) {
      this.name = name;
    } else {
      throw new Error('Имя должно быть строкой и иметь от 2 до 10 знаков.');
    }
    if (types.includes(type)) {
      this.type = type;
    } else {
      throw new Error('Тип должен быть определенным');
    }
    this.health = 100;
    this.level = 1;
    this.attack = undefined;
    this.defence = undefined;
  }

  levelUp() {
    if (this.health > 0) {
      this.level += 1;
      this.attack *= 1.2;
      this.defence *= 1.2;
      this.health = 100;
    } else {
      throw new Error('Нельзя повысить левел умершего');
    }
  }

  damage(points) {
    if (this.health >= 0) {
      this.health -= points * (1 - this.defence / 100);
    } else {
      throw new Error('Нельзя нанести урон умершему игроку');
    }
  }
}
