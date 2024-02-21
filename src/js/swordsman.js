import Character from './base';

export default class Swordsman extends Character {
  constructor(name, type) {
    super(name, type);
    this.health = 100;
    this.level = 1;
    this.attack = 40;
    this.defence = 10;
  }
}
