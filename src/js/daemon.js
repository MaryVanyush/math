import Mathematic from './Mathematic';

export default class Daemon extends Mathematic {
  constructor(name, type = 'Daemon') {
    super(name, type);
    this.attack = 100;
    this.defence = 40;
  }
}
