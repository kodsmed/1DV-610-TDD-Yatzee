import ThrowResult from "./ThrowResult.js";
import ScoreStrategy from "./../ScoreStrategy.js";
import FaceValuesScoreStrategy from "./FaceValuesScoreStrategy.js";
import PairsScoreStrategy from "./PairsScoreStrategy.js";
import NOfAKindScoreStrategy from "./NOfAKindScoreStrategy.js";
import StraitsScoreStrategy from "./StraitsScoreStrategy.js";
import BuildingsScoreStrategy from "./BuildingsScoreStrategy.js";
import ChanceScoreStrategy from "./ChanceScoreStrategy.js";
import YatzeeScoreStrategy from "./YatzeeScoreStrategy.js";
import NullScoreStrategy from "./NullScoreStrategy.js";

export default class ScoreList {
  #ones: ScoreStrategy;
  #twos: ScoreStrategy ;
  #threes: ScoreStrategy;
  #fours: ScoreStrategy;
  #fives: ScoreStrategy;
  #sixes: ScoreStrategy;
  #aPair: ScoreStrategy;
  #twoPairs: ScoreStrategy;
  #threePairs: ScoreStrategy;
  #threeOfAKind: ScoreStrategy;
  #fourOfAKind: ScoreStrategy ;
  #fiveOfAKind: ScoreStrategy;
  #smallStrait: ScoreStrategy;
  #largeStrait: ScoreStrategy;
  #fullStrait: ScoreStrategy;
  #house: ScoreStrategy;
  #villa: ScoreStrategy;
  #tower: ScoreStrategy;
  #chance: ScoreStrategy;
  #yatzee: ScoreStrategy;

  constructor() {
    this.#ones = new NullScoreStrategy();
    this.#twos = new NullScoreStrategy();
    this.#threes = new NullScoreStrategy();
    this.#fours = new NullScoreStrategy();
    this.#fives = new NullScoreStrategy();
    this.#sixes = new NullScoreStrategy();
    this.#aPair = new NullScoreStrategy();
    this.#twoPairs = new NullScoreStrategy();
    this.#threePairs = new NullScoreStrategy();
    this.#threeOfAKind = new NullScoreStrategy();
    this.#fourOfAKind = new NullScoreStrategy();
    this.#fiveOfAKind = new NullScoreStrategy();
    this.#smallStrait = new NullScoreStrategy();
    this.#largeStrait = new NullScoreStrategy();
    this.#fullStrait = new NullScoreStrategy();
    this.#house = new NullScoreStrategy();
    this.#villa = new NullScoreStrategy();
    this.#tower = new NullScoreStrategy();
    this.#chance = new NullScoreStrategy();
    this.#yatzee = new NullScoreStrategy();
  }

  set ones(scoreStrategy: ScoreStrategy) {
    if (this.#ones instanceof NullScoreStrategy === false) {
      return;
    }
    this.validateFaceValuesScoreStrategy(scoreStrategy);
    this.#ones = scoreStrategy;
  }

  get ones() {
    return this.#ones;
  }

  set twos(scoreStrategy: ScoreStrategy) {
    if (this.#twos instanceof NullScoreStrategy === false) {
      return;
    }
    this.validateFaceValuesScoreStrategy(scoreStrategy);
    this.#twos = scoreStrategy;
  }

  get twos() {
    return this.#twos;
  }

  set threes(scoreStrategy: ScoreStrategy) {
    if (this.#threes instanceof NullScoreStrategy === false) {
      return;
    }
    this.validateFaceValuesScoreStrategy(scoreStrategy);
    this.#threes = scoreStrategy;
  }

  get threes() {
    return this.#threes;
  }

  set fours(scoreStrategy: ScoreStrategy) {
    if (this.#fours instanceof NullScoreStrategy === false) {
      return;
    }
    this.validateFaceValuesScoreStrategy(scoreStrategy);
    this.#fours = scoreStrategy;
  }

  get fours() {
    return this.#fours;
  }

  set fives(scoreStrategy: ScoreStrategy) {
    if (this.#fives instanceof NullScoreStrategy === false) {
      return;
    }
    this.validateFaceValuesScoreStrategy(scoreStrategy);
    this.#fives = scoreStrategy;
  }

  get fives() {
    return this.#fives;
  }

  set sixes(scoreStrategy: ScoreStrategy) {
    if (this.#sixes instanceof NullScoreStrategy === false) {
      return;
    }
    this.validateFaceValuesScoreStrategy(scoreStrategy);
    this.#sixes = scoreStrategy;
  }

  get sixes() {
    return this.#sixes;
  }

  set aPair(scoreStrategy: ScoreStrategy) {
    if (this.#aPair instanceof NullScoreStrategy === false) {
      return;
    }
    this.validatePairsScoreStrategy(scoreStrategy);
    this.#aPair = scoreStrategy;
  }

  get aPair() {
    return this.#aPair;
  }

  set twoPairs(scoreStrategy: ScoreStrategy) {
    if (this.#twoPairs instanceof NullScoreStrategy === false) {
      return;
    }
    this.validatePairsScoreStrategy(scoreStrategy);
    this.#twoPairs = scoreStrategy;
  }

  get twoPairs() {
    return this.#twoPairs;
  }

  set threePairs(scoreStrategy: ScoreStrategy) {
    if (this.#threePairs instanceof NullScoreStrategy === false) {
      return;
    }
    this.validatePairsScoreStrategy(scoreStrategy);
    this.#threePairs = scoreStrategy;
  }

  get threePairs() {
    return this.#threePairs;
  }

  set threeOfAKind(scoreStrategy: ScoreStrategy) {
    if (this.#threeOfAKind instanceof NullScoreStrategy === false) {
      return;
    }
    this.validateNOfAKindScoreStrategy(scoreStrategy);
    this.#threeOfAKind = scoreStrategy;
  }

  get threeOfAKind() {
    return this.#threeOfAKind;
  }

  set fourOfAKind(scoreStrategy: ScoreStrategy) {
    if (this.#fourOfAKind instanceof NullScoreStrategy === false) {
      return;
    }
    this.validateNOfAKindScoreStrategy(scoreStrategy);
    this.#fourOfAKind = scoreStrategy;
  }

  get fourOfAKind() {
    return this.#fourOfAKind;
  }

  set fiveOfAKind(scoreStrategy: ScoreStrategy) {
    if (this.#fiveOfAKind instanceof NullScoreStrategy === false) {
      return;
    }
    this.validateNOfAKindScoreStrategy(scoreStrategy);
    this.#fiveOfAKind = scoreStrategy;
  }

  get fiveOfAKind() {
    return this.#fiveOfAKind;
  }

  set smallStrait(scoreStrategy: ScoreStrategy) {
    if (this.#smallStrait instanceof NullScoreStrategy === false) {
      return;
    }
    this.validateStraitsScoreStrategy(scoreStrategy);
    this.#smallStrait = scoreStrategy;
  }

  get smallStrait() {
    return this.#smallStrait;
  }

  set largeStrait(scoreStrategy: ScoreStrategy) {
    if (this.#largeStrait instanceof NullScoreStrategy === false) {
      return;
    }
    this.validateStraitsScoreStrategy(scoreStrategy);
    this.#largeStrait = scoreStrategy;
  }

  get largeStrait() {
    return this.#largeStrait;
  }

  set fullStrait(scoreStrategy: ScoreStrategy) {
    if (this.#fullStrait instanceof NullScoreStrategy === false) {
      return;
    }
    this.validateStraitsScoreStrategy(scoreStrategy);
    this.#fullStrait = scoreStrategy;
  }

  get fullStrait() {
    return this.#fullStrait;
  }

  set house(scoreStrategy: ScoreStrategy) {
    if (this.#house instanceof NullScoreStrategy === false) {
      return;
    }
    this.validateBuildingsScoreStrategy(scoreStrategy);
    this.#house = scoreStrategy;
  }

  get house() {
    return this.#house;
  }

  set villa(scoreStrategy: ScoreStrategy) {
    if (this.#villa instanceof NullScoreStrategy === false) {
      return;
    }
    this.validateBuildingsScoreStrategy(scoreStrategy);
    this.#villa = scoreStrategy;
  }

  get villa() {
    return this.#villa;
  }

  set tower(scoreStrategy: ScoreStrategy) {
    if (this.#tower instanceof NullScoreStrategy === false) {
      return;
    }
    this.validateBuildingsScoreStrategy(scoreStrategy);
    this.#tower = scoreStrategy;
  }

  get tower() {
    return this.#tower;
  }

  set chance(scoreStrategy: ScoreStrategy) {
    if (this.#chance instanceof NullScoreStrategy === false) {
      return;
    }
    this.validateChanceScoreStrategy(scoreStrategy);
    this.#chance = scoreStrategy;
  }

  get chance() {
    return this.#chance;
  }

  set yatzee(scoreStrategy: ScoreStrategy) {
  if (this.#yatzee instanceof NullScoreStrategy === false) {
      return
    }
    this.validateYatzeeScoreStrategy(scoreStrategy);
    this.#yatzee = scoreStrategy;
  }

  get yatzee() {
    return this.#yatzee;
  }

  private validateFaceValuesScoreStrategy(scoreStrategy: ScoreStrategy) {
    if (scoreStrategy instanceof FaceValuesScoreStrategy === false) {
      throw new Error(`Invalid score strategy: ${scoreStrategy.constructor.name}\nExpected: ${FaceValuesScoreStrategy.name}`);
    }
  }

  private validatePairsScoreStrategy(scoreStrategy: ScoreStrategy) {
    if (scoreStrategy instanceof PairsScoreStrategy === false) {
      throw new Error(`Invalid score strategy: ${scoreStrategy.constructor.name}\nExpected: ${PairsScoreStrategy.name}`);
    }
  }

  private validateNOfAKindScoreStrategy(scoreStrategy: ScoreStrategy) {
    if (scoreStrategy instanceof NOfAKindScoreStrategy === false) {
      throw new Error(`Invalid score strategy: ${scoreStrategy.constructor.name}\nExpected: ${NOfAKindScoreStrategy.name}`);
    }
  }

  private validateStraitsScoreStrategy(scoreStrategy: ScoreStrategy) {
    if (scoreStrategy instanceof StraitsScoreStrategy === false) {
      throw new Error(`Invalid score strategy: ${scoreStrategy.constructor.name}\nExpected: ${StraitsScoreStrategy.name}`);
    }
  }

  private validateBuildingsScoreStrategy(scoreStrategy: ScoreStrategy) {
    if (scoreStrategy instanceof BuildingsScoreStrategy === false) {
      throw new Error(`Invalid score strategy: ${scoreStrategy.constructor.name}\nExpected: ${BuildingsScoreStrategy.name}`);
    }
  }

  private validateChanceScoreStrategy(scoreStrategy: ScoreStrategy) {
    if (scoreStrategy instanceof ChanceScoreStrategy === false) {
      throw new Error(`Invalid score strategy: ${scoreStrategy.constructor.name}\nExpected: ${ChanceScoreStrategy.name}`);
    }
  }

  private validateYatzeeScoreStrategy(scoreStrategy: ScoreStrategy) {
    if (scoreStrategy instanceof YatzeeScoreStrategy === false) {
      throw new Error(`Invalid score strategy: ${scoreStrategy.constructor.name}\nExpected: ${YatzeeScoreStrategy.name}`);
    }
  }
}
