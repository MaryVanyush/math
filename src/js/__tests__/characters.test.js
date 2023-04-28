import Character from '../character';

test('check clase Character', () => {
  const received = new Character('Ivan', 'Swordsman');
  const expected = {
    attack: undefined, defence: undefined, health: 100, level: 1, name: 'Ivan', type: 'Swordsman',
  };
  expect(received).toEqual(expected);
});

test('check clase Character with error name', () => {
  expect(() => {
    const received = new Character('O');
    received.inputType('Swords');
  }).toThrow('error name');
});

test('check clase Character', () => {
  expect(() => {
    const received = new Character('Oleg', 'Swords');
    return received.name;
  }).toThrow('error type');
});
