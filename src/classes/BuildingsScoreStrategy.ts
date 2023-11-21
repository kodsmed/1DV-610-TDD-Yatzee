export enum BuildingsStrategyType {
  House,
  Villa,
  Tower
}

export default class BuildingsScoreStrategy {
  constructor(type: BuildingsStrategyType) {
    throw new Error("Not implemented");
  }
}