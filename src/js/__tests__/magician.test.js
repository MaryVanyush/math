import Magician from '../magician';

test('check clase Magician', () => {
  const received = new Magician('Ivan');
  const expected = {
    attack: 100, defence: 40, health: 100, level: 1, name: 'Ivan', type: 'Magician',
  };
  expect(received).toEqual(expected);
});

test('check method getStoned', () => {
  const received = new Magician('Ivan');
  received.getStoned(true);
  const expected = {
    attack: 100, defence: 40, health: 100, level: 1, name: 'Ivan', type: 'Magician', stoned: true,
  };
  expect(received).toEqual(expected);
});

test('check method setAttac', () => {
  const daemon = new Magician('Ivan');
  const received = daemon.setAttac(2);
  const expected = 90;
  expect(received).toEqual(expected);
});

test('check method setAttac with stoned', () => {
  const daemon = new Magician('Ivan');
  daemon.getStoned(true);
  const received = daemon.setAttac(2);
  const expected = 85;
  expect(received).toEqual(expected);
});

test('check method setAttac with wrong distance', () => {
  const daemon = new Magician('Ivan');
  const received = daemon.setAttac(11);
  const expected = null;
  expect(received).toEqual(expected);
});
