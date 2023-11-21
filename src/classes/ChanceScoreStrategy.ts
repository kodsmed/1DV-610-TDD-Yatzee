import ScoreStrategy from './../ScoreStrategy.js';
import ThrowResult from './ThrowResult.js';

export default class ChanceScoreStrategy implements ScoreStrategy {
  #throwResult: Array<number>;

  constructor(throwResult: ThrowResult) {
    this.#throwResult = throwResult.rollResult;
  }

  get score() {
    const score = this.#throwResult.reduce(
      (accumulated, current) => accumulated + current, 0
    );

    return score;
  }
}