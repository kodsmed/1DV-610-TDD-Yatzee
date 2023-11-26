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

  get score() {
    let accumulatedScore = 0;
    accumulatedScore += this.#ones.score;
    accumulatedScore += this.#twos.score;
    accumulatedScore += this.#threes.score;
    accumulatedScore += this.#fours.score;
    accumulatedScore += this.#fives.score;
    accumulatedScore += this.#sixes.score;
    accumulatedScore += this.#aPair.score;
    accumulatedScore += this.#twoPairs.score;
    accumulatedScore += this.#threePairs.score;
    accumulatedScore += this.#threeOfAKind.score;
    accumulatedScore += this.#fourOfAKind.score;
    accumulatedScore += this.#fiveOfAKind.score;
    accumulatedScore += this.#smallStrait.score;
    accumulatedScore += this.#largeStrait.score;
    accumulatedScore += this.#fullStrait.score;
    accumulatedScore += this.#house.score;
    accumulatedScore += this.#villa.score;
    accumulatedScore += this.#tower.score;
    accumulatedScore += this.#chance.score;
    accumulatedScore += this.#yatzee.score;

    return accumulatedScore;
  }

  set ones(scoreStrategy: ScoreStrategy) {
    this.#ones = this.setFieldIfAvailableAndValidated(
        this.#ones,
        this.validateFaceValuesScoreStrategy,
        scoreStrategy
    );
  }

  get ones() {
    return this.#ones;
  }

  set twos(scoreStrategy: ScoreStrategy) {
    this.#twos = this.setFieldIfAvailableAndValidated(
        this.#twos,
        this.validateFaceValuesScoreStrategy,
        scoreStrategy
    );
  }

  get twos() {
    return this.#twos;
  }

  set threes(scoreStrategy: ScoreStrategy) {
    this.#threes = this.setFieldIfAvailableAndValidated(
        this.#threes,
        this.validateFaceValuesScoreStrategy,
        scoreStrategy
    );
  }

  get threes() {
    return this.#threes;
  }

  set fours(scoreStrategy: ScoreStrategy) {
    this.#fours = this.setFieldIfAvailableAndValidated(
        this.#fours,
        this.validateFaceValuesScoreStrategy,
        scoreStrategy
    );
  }

  get fours() {
    return this.#fours;
  }

  set fives(scoreStrategy: ScoreStrategy) {
    this.#fives = this.setFieldIfAvailableAndValidated(
        this.#fives,
        this.validateFaceValuesScoreStrategy,
        scoreStrategy
    );
  }

  get fives() {
    return this.#fives;
  }

  set sixes(scoreStrategy: ScoreStrategy) {
    this.#sixes = this.setFieldIfAvailableAndValidated(
        this.#sixes,
        this.validateFaceValuesScoreStrategy,
        scoreStrategy
    );
  }

  get sixes() {
    return this.#sixes;
  }

  set aPair(scoreStrategy: ScoreStrategy) {
    this.#aPair = this.setFieldIfAvailableAndValidated(
        this.#aPair,
        this.validatePairsScoreStrategy,
        scoreStrategy
    );
  }

  get aPair() {
    return this.#aPair;
  }

  set twoPairs(scoreStrategy: ScoreStrategy) {
    this.#twoPairs = this.setFieldIfAvailableAndValidated(
        this.#twoPairs,
        this.validatePairsScoreStrategy,
        scoreStrategy
    );
  }

  get twoPairs() {
    return this.#twoPairs;
  }

  set threePairs(scoreStrategy: ScoreStrategy) {
    this.#threePairs = this.setFieldIfAvailableAndValidated(
        this.#threePairs,
        this.validatePairsScoreStrategy,
        scoreStrategy
    );
  }

  get threePairs() {
    return this.#threePairs;
  }

  set threeOfAKind(scoreStrategy: ScoreStrategy) {
    this.#threeOfAKind = this.setFieldIfAvailableAndValidated(
        this.#threeOfAKind,
        this.validateNOfAKindScoreStrategy,
        scoreStrategy
    );
  }

  get threeOfAKind() {
    return this.#threeOfAKind;
  }

  set fourOfAKind(scoreStrategy: ScoreStrategy) {
    this.#fourOfAKind = this.setFieldIfAvailableAndValidated(
        this.#fourOfAKind,
        this.validateNOfAKindScoreStrategy,
        scoreStrategy
    );
  }

  get fourOfAKind() {
    return this.#fourOfAKind;
  }

  set fiveOfAKind(scoreStrategy: ScoreStrategy) {
    this.#fiveOfAKind = this.setFieldIfAvailableAndValidated(
        this.#fiveOfAKind,
        this.validateNOfAKindScoreStrategy,
        scoreStrategy
    );
  }

  get fiveOfAKind() {
    return this.#fiveOfAKind;
  }

  set smallStrait(scoreStrategy: ScoreStrategy) {
    this.#smallStrait = this.setFieldIfAvailableAndValidated(
        this.#smallStrait,
        this.validateStraitsScoreStrategy,
        scoreStrategy
    );
  }

  get smallStrait() {
    return this.#smallStrait;
  }

  set largeStrait(scoreStrategy: ScoreStrategy) {
    this.#largeStrait = this.setFieldIfAvailableAndValidated(
        this.#largeStrait,
        this.validateStraitsScoreStrategy,
        scoreStrategy
    );
  }

  get largeStrait() {
    return this.#largeStrait;
  }

  set fullStrait(scoreStrategy: ScoreStrategy) {
    this.#fullStrait = this.setFieldIfAvailableAndValidated(
        this.#fullStrait,
        this.validateStraitsScoreStrategy,
        scoreStrategy
    );
  }

  get fullStrait() {
    return this.#fullStrait;
  }

  set house(scoreStrategy: ScoreStrategy) {
    this.#house = this.setFieldIfAvailableAndValidated(
        this.#house,
        this.validateBuildingsScoreStrategy,
        scoreStrategy
    );
  }

  get house() {
    return this.#house;
  }

  set villa(scoreStrategy: ScoreStrategy) {
    this.#villa = this.setFieldIfAvailableAndValidated(
        this.#villa,
        this.validateBuildingsScoreStrategy,
        scoreStrategy
    );
  }

  get villa() {
    return this.#villa;
  }

  set tower(scoreStrategy: ScoreStrategy) {
    this.#tower = this.setFieldIfAvailableAndValidated(
        this.#tower,
        this.validateBuildingsScoreStrategy,
        scoreStrategy
    );
  }

  get tower() {
    return this.#tower;
  }

  set chance(scoreStrategy: ScoreStrategy) {
    this.#chance = this.setFieldIfAvailableAndValidated(
        this.#chance,
        this.validateChanceScoreStrategy,
        scoreStrategy
    );
  }

  get chance() {
    return this.#chance;
  }

  set yatzee(scoreStrategy: ScoreStrategy) {
    this.#yatzee = this.setFieldIfAvailableAndValidated(
        this.#yatzee,
        this.validateYatzeeScoreStrategy,
        scoreStrategy
    );
  }

  get yatzee() {
    return this.#yatzee;
  }

  private setFieldIfAvailableAndValidated(field: ScoreStrategy, validator: Function, scoreStrategy: ScoreStrategy) {
    if (field instanceof NullScoreStrategy === true) {
      validator(scoreStrategy);
      return scoreStrategy;
    }

    return field;
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
