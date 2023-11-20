import ThrowResult from "./ThrowResult.js";
import ScoreStrategy from "../ScoreStrategy.js";
import Utility from "./Utility.js";

export default class NOfAKindScoreStrategy implements ScoreStrategy {
  #expectedOfAKind: number;
  #throwResult: ThrowResult;

  constructor(ofAKindExpected: number, throwResult: ThrowResult) {
    this.#expectedOfAKind = ofAKindExpected;
    this.#throwResult = throwResult;
  }

  get score(): number {
    let score: number = 0;
    const utilities = new Utility();
    const groups = utilities.findOfAKind(this.#throwResult.rollResult as Array<number>, this.#expectedOfAKind);
    if (groups.length === 0) {
      return score;
    } else if (groups.length > 1) {

      //sort descending to get the highest pair first
      groups.sort((a, b) => b - a);
    }
    score += groups[0] * this.#expectedOfAKind;

    return score;
  }
}