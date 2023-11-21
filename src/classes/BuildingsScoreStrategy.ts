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
      if (this.#throwResult[3] === this.#throwResult[4]) {
        score = 21;
      }
    }

    if (this.#type === BuildingsStrategyType.Tower) {
      if (this.#throwResult[4] === this.#throwResult[5]) {
        score = 22;
      }
    }

    return score;
  }
}