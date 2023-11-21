import Utility from "./Utility.js";

export enum BuildingsStrategyType {
  House,
  Villa,
  Tower
}

export default class BuildingsScoreStrategy {
  #type: BuildingsStrategyType;
  #throwResult: Array<number>;
  #utility: Utility;

  constructor(type: BuildingsStrategyType, throwResult: Array<number>) {
    this.#type = type;
    this.#throwResult = throwResult;
    this.#utility = new Utility();
  }

  public get score(): number {
    let score = 0;

    if (this.#type === BuildingsStrategyType.House) {
      const threeOfAKinds = this.#utility.findOfAKind(this.#throwResult, 3);
      const pairs = this.#utility.findOfAKind(this.#throwResult, 2);

      // Remove the pair that is part of the three of a kind.
      for (let i = 0; i < pairs.length; i++) {
        if (pairs[i] == threeOfAKinds[0]) {
          pairs.splice(i, 1);
          break;
        }
      }

      if (threeOfAKinds.length >= 1 && pairs.length === 1) {
        score = threeOfAKinds[0] * 3 + pairs[0] * 2;
      }
      return score;
    }

    if (this.#type === BuildingsStrategyType.Villa) {
      let score = 0;
      const threeOfAKinds = this.#utility.findOfAKind(this.#throwResult, 3);

      if (threeOfAKinds.length === 2) {
        score = threeOfAKinds[0] * 3 + threeOfAKinds[1] * 3;
      }

      return score;
    }

    if (this.#type === BuildingsStrategyType.Tower) {
      const fourOfAKinds = this.#utility.findOfAKind(this.#throwResult, 4);
      const pairs = this.#utility.findOfAKind(this.#throwResult, 2);

      // Remove the pair that is part of the three of a kind.
      for (let i = 0; i < pairs.length; i++) {
        if (pairs[i] == fourOfAKinds[0]) {
          pairs.splice(i, 1);
          break;
        }
      }

      if (fourOfAKinds.length === 1 && pairs.length === 1) {
        score = fourOfAKinds[0] * 4 + pairs[0] * 2;
      }
    }

    return score;
  }
}