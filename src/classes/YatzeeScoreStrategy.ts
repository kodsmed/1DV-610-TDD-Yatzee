import ThrowResult from "./ThrowResult.js";
import ScoreStrategy from "../ScoreStrategy.js";

export default class YatzeeScoreStrategy implements ScoreStrategy {
  constructor(throwResult: ThrowResult) {
    throw new Error("Method not implemented.");
  }

  get score(): number {
    throw new Error("Method not implemented.");
  }
}