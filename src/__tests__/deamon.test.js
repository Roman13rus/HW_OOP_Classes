import Daemon from '../js/daemon';

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
