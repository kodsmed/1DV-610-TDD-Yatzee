export enum BuildingsStrategyType {
  House,
  Villa,
  Tower
}

export default class BuildingsScoreStrategy {
  #type: BuildingsStrategyType;
  #throwResult: Array<number>;

  constructor(type: BuildingsStrategyType, throwResult: Array<number>) {
    this.#type = type;
    this.#throwResult = throwResult;
  }

  public get score(): number {
    let score = 0;
    if (this.#type === BuildingsStrategyType.House) {
       if (this.#throwResult[0] === this.#throwResult[1]) {
        score = 18;
       }
    }

    if (this.#type === BuildingsStrategyType.Villa) {
      if (this.#throwResult[3] === this.#throwResult[4]) {
        score = 21;
      }
    }

    if (this.#type === BuildingsStrategyType.Tower) {
      score = 22;
    }

    return score;
  }
}