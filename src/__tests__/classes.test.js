import Bowerman from '../js/bowerman';
import Daemon from '../js/daemon';
import Magician from '../js/magician';
import Swordsman from '../js/swordsman';
import Undead from '../js/undead';
import Zombie from '../js/zombie';

test('checking the creation of class Bowerman instances and their attributes', () => {
  const received = new Bowerman('bow', 'Bowerman');
  const expected = {
    name: 'bow',
    type: 'Bowerman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(received).toEqual(expected);
});

test('checking the creation of class Daemon instances and their attributes', () => {
  const received = new Daemon('dead', 'Daemon');
  const expected = {
    name: 'dead',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  expect(received).toEqual(expected);
});

test('checking the creation of class Magician instances and their attributes', () => {
  const received = new Magician('Mag', 'Magician');
  const expected = {
    name: 'Mag',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  expect(received).toEqual(expected);
});

test('checking the creation of class Swordsman instances and their attributes', () => {
  const received = new Swordsman('Swor', 'Swordsman');
  const expected = {
    name: 'Swor',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  expect(received).toEqual(expected);
});

test('checking the creation of class Undead instances and their attributes', () => {
  const received = new Undead('undead', 'Undead');
  const expected = {
    name: 'undead',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(received).toEqual(expected);
});

test('checking the creation of class Zombie instances and their attributes', () => {
  const received = new Zombie('zomb', 'Zombie');
  const expected = {
    name: 'zomb',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  expect(received).toEqual(expected);
});

test('checking the creation of instances of a class with an input length error', () => {
  function createZombie() {
    const c = new Zombie('kvndkokbndonbojdnbjdn', 'Zombie');
    return c;
  }
  expect(createZombie).toThrow(new Error('Имя должно быть строкой и иметь от 2 до 10 знаков.'));
});

test('checking for the creation of instances of a class with a type not included in the allowed list', () => {
  function createZombie() {
    const c = new Zombie('myZombie', 'Zombiret');
    return c;
  }
  expect(createZombie).toThrow(new Error('Тип должен быть определенным'));
});

test('checking the operation of the LevelUp method', () => {
  const myUndead = new Undead('myundead', 'Undead');
  myUndead.levelUp();
  const expected = {
    name: 'myundead',
    type: 'Undead',
    health: 100,
    level: 2,
    attack: 30,
    defence: 30,
  };
  expect(myUndead).toEqual(expected);
});

test('checking the operation of the level Up method when the health level is 0', () => {
  function createZombie() {
    const myZombie = new Zombie('myZombie', 'Zombie');
    myZombie.health = 0;
    myZombie.levelUp();
  }
  expect(createZombie).toThrow(new Error('Нельзя повысить левел умершего'));
});

test('checking the operation of the damage(points) method', () => {
  const myUndead = new Undead('myundead', 'Undead');
  myUndead.damage(34);
  const expected = {
    name: 'myundead',
    type: 'Undead',
    health: 74.5,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(myUndead).toEqual(expected);
});

test('checking the operation of the damage method when the health level is 0', () => {
  function createZombie() {
    const myZombie = new Zombie('myZombie', 'Zombie');
    myZombie.health = -1;
    myZombie.damage(23);
  }
  expect(createZombie).toThrow(new Error('Нельзя нанести урон умершему игроку'));
});
