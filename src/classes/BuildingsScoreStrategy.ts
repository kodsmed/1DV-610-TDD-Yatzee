export enum BuildingsStrategyType {
  House,
  Villa,
  Tower
}

export default class BuildingsScoreStrategy {
  constructor(type: BuildingsStrategyType, throwResult: Array<number>) {
  }

  public get score(): number {
    return -1;
  }
}