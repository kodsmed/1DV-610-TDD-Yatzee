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
  #ones: any;
  #twos: any;
  #threes: any;
  #fours: any;
  #fives: any;
  #sixes: any;
  #aPair: any;
  #twoPairs: any;
  #threePairs: any;
  #threeOfAKind: any;
  #fourOfAKind: any;
  #fiveOfAKind: any;
  #smallStraight: any;
  #largeStraight: any;
  #fullStraight: any;
  #house: any;
  #villa: any;
  #tower: any;
  #chance: any;
  #yatzee: any;

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
    this.#smallStraight = new NullScoreStrategy();
    this.#largeStraight = new NullScoreStrategy();
    this.#fullStraight = new NullScoreStrategy();
    this.#house = new NullScoreStrategy();
    this.#villa = new NullScoreStrategy();
    this.#tower = new NullScoreStrategy();
    this.#chance = new NullScoreStrategy();
    this.#yatzee = new NullScoreStrategy();
  }

  set ones(scoreStrategy: ScoreStrategy) {
    this.validateFaceValuesScoreStrategy(scoreStrategy);
  }

  get ones() {
    return this.#ones.score;
  }

  set twos(scoreStrategy: ScoreStrategy) {
    this.validateFaceValuesScoreStrategy(scoreStrategy);
  }

  get twos() {
    return this.#twos.score;
  }

  set threes(scoreStrategy: ScoreStrategy) {
    this.validateFaceValuesScoreStrategy(scoreStrategy);
  }

  get threes() {
    return this.#threes.score;
  }

  set fours(scoreStrategy: ScoreStrategy) {
    this.validateFaceValuesScoreStrategy(scoreStrategy);
  }

  get fours() {
    return this.#fours.score;
  }

  set fives(scoreStrategy: ScoreStrategy) {
    this.validateFaceValuesScoreStrategy(scoreStrategy);
  }

  get fives() {
    return this.#fives.score;
  }

  set sixes(scoreStrategy: ScoreStrategy) {
    this.validateFaceValuesScoreStrategy(scoreStrategy);
  }

  get sixes() {
    return this.#sixes.score;
  }

  set aPair(scoreStrategy: ScoreStrategy) {
    this.validatePairsScoreStrategy(scoreStrategy);
  }

  get aPair() {
    return this.#aPair.score;
  }

  set twoPairs(scoreStrategy: ScoreStrategy) {
    this.validatePairsScoreStrategy(scoreStrategy);
  }

  get twoPairs() {
    return this.#twoPairs.score;
  }

  set threePairs(scoreStrategy: ScoreStrategy) {
    this.validatePairsScoreStrategy(scoreStrategy);
  }

  get threePairs() {
    return this.#threePairs.score;
  }

  set threeOfAKind(scoreStrategy: ScoreStrategy) {
    this.validateNOfAKindScoreStrategy(scoreStrategy);
  }

  get threeOfAKind() {
    return this.#threeOfAKind.score;
  }

  set fourOfAKind(scoreStrategy: ScoreStrategy) {
    this.validateNOfAKindScoreStrategy(scoreStrategy);
  }

  get fourOfAKind() {
    return this.#fourOfAKind.score;
  }

  set fiveOfAKind(scoreStrategy: ScoreStrategy) {
    this.validateNOfAKindScoreStrategy(scoreStrategy);
  }

  get fiveOfAKind() {
    return this.#fiveOfAKind.score;
  }

  get smallStraight() {
    return this.#smallStraight.score;
  }

  get largeStraight() {
    return this.#largeStraight.score;
  }

  get fullStraight() {
    return this.#fullStraight.score;
  }

  get house() {
    return this.#house.score;
  }

  get villa() {
    return this.#villa.score;
  }

  get tower() {
    return this.#tower.score;
  }

  get chance() {
    return this.#chance.score;
  }

  get yatzee() {
    return this.#yatzee.score;
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
  // TODO: IMPLEMENT SETTERS
}
