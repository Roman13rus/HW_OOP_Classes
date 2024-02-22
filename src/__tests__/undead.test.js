import Undead from '../js/undead';

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
