import ThrowResult from "./ThrowResult.js";
import ScoreStrategy from "../ScoreStrategy.js";

export default class NOfAKindScoreStrategy implements ScoreStrategy {
  #expectedOfAKind: number;
  #throwResult: ThrowResult;

  constructor(ofAKindExpected: number, throwResult: ThrowResult) {
    this.#expectedOfAKind = ofAKindExpected;
    this.#throwResult = throwResult;
  }

  get score(): number {
    let score: number = 0;
    const groups = this.findOfAKind(this.#throwResult.rollResult as Array<number>);
    if (groups.length === 0) {
      return score;
    } else if (groups.length > 1) {

      //sort descending to get the highest pair first
      groups.sort((a, b) => b - a);
    }
    score += groups[0] * this.#expectedOfAKind;

    return score;
  }

  private findOfAKind(numbers: Array<number>): Array<number> {
    const elementCount = new Map();
    let groups = [] as Array<number>;

    // Count the occurrences of each element
    numbers.forEach(element => {
      if (!elementCount.has(element)) {
        elementCount.set(element, 0);
      }
      elementCount.set(element, elementCount.get(element) + 1);
    });

    // Find elements that have exactly 2 occurrences (a pair)
    elementCount.forEach((count, element) => {
      if (count >= this.#expectedOfAKind) {
        groups.push(element);
      }
    });

    return groups;
  }
}