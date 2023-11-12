import ScoreStrategy from "../ScoreStrategy.js";
import ThrowResult from "./ThrowResult.js";

export default class PairsScoreStrategy implements ScoreStrategy {
  #expectedNumber: number;
  #throwResult: ThrowResult;

  constructor(numberOfPairsToExpect: number, throwResult: ThrowResult) {
    this.#expectedNumber = numberOfPairsToExpect;
    this.#throwResult = throwResult;
  }

  get score(): number {
    let score: number = 0;
    const pairs = this.findPairs(this.#throwResult.rollResult as Array<number>);
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

  private findPairs(numbers: Array<number>): Array<number> {
    const elementCount = new Map();
    let pairs = [] as Array<number>;

    // Count the occurrences of each element
    numbers.forEach(element => {
      if (!elementCount.has(element)) {
        elementCount.set(element, 0);
      }
      elementCount.set(element, elementCount.get(element) + 1);
    });

    // Find elements that have exactly 2 occurrences (a pair)
    elementCount.forEach((count, element) => {
      if (count >= 2) {
        pairs.push(element);
      }
    });

    return pairs;
  }
}