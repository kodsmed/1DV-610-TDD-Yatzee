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
      score = this.getBuildingScore(3, 2);
    }

    if (this.#type === BuildingsStrategyType.Villa) {
      score = this.getBuildingScore(3, 3);
    }

    if (this.#type === BuildingsStrategyType.Tower) {
      score = this.getBuildingScore(4, 2);
    }

    return score;
  }

  private getBuildingScore(groupSizeA: number, groupSizeB: number): number {
    const groupA = this.#utility.findOfAKind(this.#throwResult, groupSizeA);
    const groupB = this.#utility.findOfAKind(this.#throwResult, groupSizeB);

    // Remove the highest value of groupB if it is part of groupA.
    for (let i = 0; i < groupB.length; i++) {
      if (groupB[i] == groupA[0]) {
        groupB.splice(i, 1);
        break;
      }
    }

    if (groupA.length >= 1 && groupB.length === 1) {
      return groupA[0] * groupSizeA + groupB[0] * groupSizeB;
    }

    return 0;
  }
}