export default class Character {
  constructor(name, type, health, level, attack, defence) {
    if (typeof name === 'string' && (name.length >= 2 && name.length <= 10)) {
      this.name = name;
    } else {
      throw new Error('Имя должно быть строкой и иметь от 2 до 10 знаков.');
    }
    if (['Bowerman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'].includes(type)) {
      this.type = type;
    } else {
      throw new Error('Тип должен быть определенным');
    }
    this.health = health;
    this.level = level;
    this.attack = attack;
    this.defence = defence;
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
