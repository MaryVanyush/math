import Daemon from '../daemon';
import Magician from '../magician';

test('check method Stoned', () => {
  const received = new Magician('Ivan');
  received.stoned = true;
  const expected = {
    attack: 100, defence: 40, health: 100, level: 1, name: 'Ivan', type: 'Magician', _stoned: true,
  };
  expect(received).toEqual(expected);
});

test('check method powerAttack', () => {
  const magician = new Magician('Ivan');
  magician.setDistance(2);
  // eslint-disable-next-line
  magician.powerAttack;
  const received = magician._attack;
  const expected = 90;
  expect(received).toEqual(expected);
});

test('check method powerAttack with stoned', () => {
  const daemon = new Daemon('Ivan');
  daemon.stoned = true;
  daemon.setDistance(2);
  // eslint-disable-next-line
  daemon.powerAttack;
  const received = daemon;
  const expected = {
    attack: 100, defence: 40, distance: 2, health: 100, level: 1, name: 'Ivan', type: 'Daemon', _attack: 85, _stoned: true,
  };
  expect(received).toEqual(expected);
});

test('check method powerAttack with wrong distance', () => {
  const daemon = new Daemon('Ivan');
  daemon.setDistance(11);
  // eslint-disable-next-line
  daemon.powerAttack;
  const received = daemon;
  const expected = {
    attack: 100, defence: 40, distance: 11, health: 100, level: 1, name: 'Ivan', type: 'Daemon',
  };
  expect(received).toEqual(expected);
});
