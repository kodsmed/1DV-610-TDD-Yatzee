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
    this.validateFaceValuesScoreStrategy(scoreStrategy);
    this.#ones = scoreStrategy;
  }

  get ones() {
    return this.#ones;
  }

  set twos(scoreStrategy: ScoreStrategy) {
    this.validateFaceValuesScoreStrategy(scoreStrategy);
    this.#twos = scoreStrategy;
  }

  get twos() {
    return this.#twos;
  }

  set threes(scoreStrategy: ScoreStrategy) {
    this.validateFaceValuesScoreStrategy(scoreStrategy);
    this.#threes = scoreStrategy;
  }

  get threes() {
    return this.#threes;
  }

  set fours(scoreStrategy: ScoreStrategy) {
    this.validateFaceValuesScoreStrategy(scoreStrategy);
    this.#fours = scoreStrategy;
  }

  get fours() {
    return this.#fours;
  }

  set fives(scoreStrategy: ScoreStrategy) {
    this.validateFaceValuesScoreStrategy(scoreStrategy);
    this.#fives = scoreStrategy;
  }

  get fives() {
    return this.#fives;
  }

  set sixes(scoreStrategy: ScoreStrategy) {
    this.validateFaceValuesScoreStrategy(scoreStrategy);
    this.#sixes = scoreStrategy;
  }

  get sixes() {
    return this.#sixes;
  }

  set aPair(scoreStrategy: ScoreStrategy) {
    this.validatePairsScoreStrategy(scoreStrategy);
    this.#aPair = scoreStrategy;
  }

  get aPair() {
    return this.#aPair;
  }

  set twoPairs(scoreStrategy: ScoreStrategy) {
    this.validatePairsScoreStrategy(scoreStrategy);
    this.#twoPairs = scoreStrategy;
  }

  get twoPairs() {
    return this.#twoPairs;
  }

  set threePairs(scoreStrategy: ScoreStrategy) {
    this.validatePairsScoreStrategy(scoreStrategy);
    this.#threePairs = scoreStrategy;
  }

  get threePairs() {
    return this.#threePairs;
  }

  set threeOfAKind(scoreStrategy: ScoreStrategy) {
    this.validateNOfAKindScoreStrategy(scoreStrategy);
    this.#threeOfAKind = scoreStrategy;
  }

  get threeOfAKind() {
    return this.#threeOfAKind;
  }

  set fourOfAKind(scoreStrategy: ScoreStrategy) {
    this.validateNOfAKindScoreStrategy(scoreStrategy);
    this.#fourOfAKind = scoreStrategy;
  }

  get fourOfAKind() {
    return this.#fourOfAKind;
  }

  set fiveOfAKind(scoreStrategy: ScoreStrategy) {
    this.validateNOfAKindScoreStrategy(scoreStrategy);
    this.#fiveOfAKind = scoreStrategy;
  }

  get fiveOfAKind() {
    return this.#fiveOfAKind;
  }

  set smallStrait(scoreStrategy: ScoreStrategy) {
    this.validateStraitsScoreStrategy(scoreStrategy);
    this.#smallStrait = scoreStrategy;
  }

  get smallStrait() {
    return this.#smallStrait;
  }

  set largeStrait(scoreStrategy: ScoreStrategy) {
    this.validateStraitsScoreStrategy(scoreStrategy);
    this.#largeStrait = scoreStrategy;
  }

  get largeStrait() {
    return this.#largeStrait;
  }

  set fullStrait(scoreStrategy: ScoreStrategy) {
    this.validateStraitsScoreStrategy(scoreStrategy);
    this.#fullStrait = scoreStrategy;
  }

  get fullStrait() {
    return this.#fullStrait;
  }

  set house(scoreStrategy: ScoreStrategy) {
    this.validateBuildingsScoreStrategy(scoreStrategy);
    this.#house = scoreStrategy;
  }

  get house() {
    return this.#house;
  }

  set villa(scoreStrategy: ScoreStrategy) {
    this.validateBuildingsScoreStrategy(scoreStrategy);
    this.#villa = scoreStrategy;
  }

  get villa() {
    return this.#villa;
  }

  set tower(scoreStrategy: ScoreStrategy) {
    this.validateBuildingsScoreStrategy(scoreStrategy);
    this.#tower = scoreStrategy;
  }

  get tower() {
    return this.#tower;
  }

  set chance(scoreStrategy: ScoreStrategy) {
    this.validateChanceScoreStrategy(scoreStrategy);
    this.#chance = scoreStrategy;
  }

  get chance() {
    return this.#chance;
  }

  set yatzee(scoreStrategy: ScoreStrategy) {
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
