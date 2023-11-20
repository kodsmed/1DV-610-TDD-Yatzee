import ScoreStrategy from "../ScoreStrategy.js";
import ThrowResult from "./ThrowResult.js";
import Utility from "./Utility.js";

export default class PairsScoreStrategy implements ScoreStrategy {
  #expectedNumber: number;
  #throwResult: ThrowResult;

  constructor(numberOfPairsToExpect: number, throwResult: ThrowResult) {
    this.#expectedNumber = numberOfPairsToExpect;
    this.#throwResult = throwResult;
  }

  get score(): number {
    let score: number = 0;
    const utilities = new Utility();
    const pairs = utilities.findOfAKind(this.#throwResult.rollResult as Array<number>, 2);

    if (pairs.length < this.#expectedNumber) {
      return 0;
    }

    //sort descending to get the highest pair first
    pairs.sort((a, b) => b - a);

    for (let i = 0; i < this.#expectedNumber; i++) {
      score += pairs[i] * 2;
    }
    return score;
  }

}