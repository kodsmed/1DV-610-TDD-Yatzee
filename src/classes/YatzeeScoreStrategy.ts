import ThrowResult from "./ThrowResult.js";
import ScoreStrategy from "../ScoreStrategy.js";

export default class YatzeeScoreStrategy implements ScoreStrategy {
  #throwResult: ThrowResult;

  constructor(throwResult: ThrowResult) {
    this.#throwResult = throwResult;
  }

  get score(): number {
    const firstDie = this.#throwResult.rollResult[0];
    const allDiceAreTheSame = this.#throwResult.rollResult.every(die => die === firstDie);
    return allDiceAreTheSame ? 100 : 0;
  }
}