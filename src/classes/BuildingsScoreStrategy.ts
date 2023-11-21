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
    if (this.#type === BuildingsStrategyType.House) {
      return 18;
    }

    if (this.#type === BuildingsStrategyType.Villa) {
      return 21;
    }

    if (this.#type === BuildingsStrategyType.Tower) {
      return 22;
    }
  }
}