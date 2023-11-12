import Die from './DieClass.js';

export default class ThrowResult {
  rollResult: Array<Number>;

  constructor(dice: Array<Die>) {
    this.rollResult = [];
    for (const die of dice) {
      this.rollResult.push(die.faceValue);
    }

    Object.freeze(this);
  }

}