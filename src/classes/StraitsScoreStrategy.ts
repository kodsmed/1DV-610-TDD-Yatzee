import ThrowResult from "./ThrowResult.js";
import ScoreStrategy from "../ScoreStrategy.js";

export default class StraitsScoreStrategy implements ScoreStrategy {
  constructor(expectedStrait: Array<number>, throwResult: ThrowResult) {
    throw new Error("Method not implemented.");
  }

  get score(): number {
    throw new Error("Method not implemented.");
  }
}