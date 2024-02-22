import Bowerman from '../js/bowerman';

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
