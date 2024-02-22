import Swordsman from '../js/swordsman';

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
