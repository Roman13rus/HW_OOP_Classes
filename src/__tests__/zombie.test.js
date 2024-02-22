import Zombie from '../js/zombie';

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

test('checking the operation of the level Up method when the health level is 0', () => {
  function createZombie() {
    const myZombie = new Zombie('myZombie', 'Zombie');
    myZombie.health = 0;
    myZombie.levelUp();
  }
  expect(createZombie).toThrow(new Error('Нельзя повысить левел умершего'));
});

test('checking the operation of the damage method when the health level is 0', () => {
  function createZombie() {
    const myZombie = new Zombie('myZombie', 'Zombie');
    myZombie.health = -1;
    myZombie.damage(23);
  }
  expect(createZombie).toThrow(new Error('Нельзя нанести урон умершему игроку'));
});
