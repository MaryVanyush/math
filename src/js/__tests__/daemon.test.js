import Daemon from '../daemon';

test('check clase Daemon', () => {
  const received = new Daemon('Ivan');
  const expected = {
    attack: 100, defence: 40, health: 100, level: 1, name: 'Ivan', type: 'Daemon',
  };
  expect(received).toEqual(expected);
});

test('check method getStoned', () => {
  const received = new Daemon('Ivan');
  received.getStoned(true);
  const expected = {
    attack: 100, defence: 40, health: 100, level: 1, name: 'Ivan', type: 'Daemon', stoned: true,
  };
  expect(received).toEqual(expected);
});

test('check method setAttac', () => {
  const daemon = new Daemon('Ivan');
  const received = daemon.setAttac(2);
  const expected = 90;
  expect(received).toEqual(expected);
});

test('check method setAttac with stoned', () => {
  const daemon = new Daemon('Ivan');
  daemon.getStoned(true);
  const received = daemon.setAttac(2);
  const expected = 85;
  expect(received).toEqual(expected);
});

test('check method setAttac with wrong distance', () => {
  const daemon = new Daemon('Ivan');
  const received = daemon.setAttac(11);
  const expected = null;
  expect(received).toEqual(expected);
});
