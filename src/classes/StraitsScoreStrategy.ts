import ThrowResult from "./ThrowResult.js";
import ScoreStrategy from "../ScoreStrategy.js";

export default class StraitsScoreStrategy implements ScoreStrategy {
  #expectedStrait: Array<number>;
  #throwResult: ThrowResult;

  constructor(expectedStrait: Array<number>, throwResult: ThrowResult) {
    this.#expectedStrait = expectedStrait;
    this.#throwResult = throwResult;
  }

  get score(): number {
    let allExpectedExists = true;
    let score = 0;
    for (const expectedNumber of this.#expectedStrait) {
      if (!this.#throwResult.rollResult.includes(expectedNumber)) {
        allExpectedExists = false;
        break;
      } else {
        score += expectedNumber;
      }
    }
    return allExpectedExists ? score : 0;
  }
}
