import ScoreStrategy from "../ScoreStrategy.js";

export default class NullScoreStrategy implements ScoreStrategy{
  get score() {
    return NaN;
  }
}