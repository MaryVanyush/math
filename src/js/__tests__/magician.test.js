import Magician from '../magician';

test('check clase Magician', () => {
  const received = new Magician('Ivan');
  const expected = {
    attack: 100, defence: 40, health: 100, level: 1, name: 'Ivan', type: 'Magician',
  };
  expect(received).toEqual(expected);
});
