import Character from './character';

export default class Mathematic extends Character {
  get stoned() {
    return this._stoned;
  }

  set stoned(state) {
    this._stoned = state;
  }

  setDistance(distance) {
    this.distance = distance;
  }

  get powerAttack() {
    if (this.distance < 1 || this.distance > 10) {
      return;
    }
    const index = [1, 0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3, 0.2, 0.1];
    if (this.stoned === true) {
      const attackPower = this.attack - Math.log2(this.distance) * 15;
      this._attack = +attackPower.toFixed(0);
      // eslint-disable-next-line
      return this._attack;
    }
    this._attack = Number(this.attack * index[this.distance - 1]);
    // eslint-disable-next-line
    return this._attack;
  }

  set powerAttack(attack) {
    this._attack = attack;
  }
}
