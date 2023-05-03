import Character from './character';

export default class Mathematic extends Character {
  get stoned() {
    return this._stoned;
  }

  set stoned(state) {
    this._stoned = state;
  }

  get powerAttack() {
    return this._attack;
  }

  set powerAttac(distance) {
    if (distance < 1 || distance > 10) {
      return;
    }
    const index = [1, 0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3, 0.2, 0.1];
    if (this.stoned === true) {
      const attackPower = this.attack - Math.log2(distance) * 15;
      this._attack = +attackPower.toFixed(0);
      return;
    }
    this._attack = Number(this.attack * index[distance - 1]);
  }
}
