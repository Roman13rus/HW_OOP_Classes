import Magician from '../js/magician';

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
