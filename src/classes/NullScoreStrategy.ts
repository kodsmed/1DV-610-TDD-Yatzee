import ScoreStrategy from "../ScoreStrategy.js";

export default class NullScoreStrategy {
  get score() {
    return 'a';
  }
}