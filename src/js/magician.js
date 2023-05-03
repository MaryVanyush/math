import Mathematic from './Mathematic';

export default class Magician extends Mathematic {
  constructor(name, type = 'Magician') {
    super(name, type);
    this.attack = 100;
    this.defence = 40;
  }
}
