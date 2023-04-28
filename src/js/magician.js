import Character from './character';

export default class Magician extends Character {
  constructor(name, type = 'Magician') {
    super(name, type);
    // this.type = 'Magician';
    this.attack = 100;
    this.defence = 40;
  }

  getStoned(state) {
    this.stoned = state;
  }

  setAttac(distance) {
    if (distance < 1 || distance > 10) {
      return null;
    }
    const index = [1, 0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3, 0.2, 0.1];
    if (this.stoned === true) {
      const attackPower = this.attack - Math.log2(distance) * 15;
      return +attackPower.toFixed(0);
    }
    return Number(this.attack * index[distance - 1]);
  }
}
