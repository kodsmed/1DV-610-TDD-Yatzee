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
    if (scoreStrategy.constructor.name != 'FaceValuesScoreStrategy') {
      throw new Error(`Invalid score strategy: ${scoreStrategy.constructor.name}\nExpected: ${FaceValuesScoreStrategy.name}`);
    }
  }

  get ones() {
    return this.#ones.score;
  }

  set twos(scoreStrategy: ScoreStrategy) {
    if (scoreStrategy.constructor.name != 'FaceValuesScoreStrategy') {
      throw new Error(`Invalid score strategy: ${scoreStrategy.constructor.name}\nExpected: ${FaceValuesScoreStrategy.name}`);
    }
  }

  get twos() {
    return this.#twos.score;
  }

  get threes() {
    return this.#threes.score;
  }

  get fours() {
    return this.#fours.score;
  }

  get fives() {
    return this.#fives.score;
  }

  get sixes() {
    return this.#sixes.score;
  }

  get aPair() {
    return this.#aPair.score;
  }

  get twoPairs() {
    return this.#twoPairs.score;
  }

  get threePairs() {
    return this.#threePairs.score;
  }

  get threeOfAKind() {
    return this.#threeOfAKind.score;
  }

  get fourOfAKind() {
    return this.#fourOfAKind.score;
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
  // TODO: IMPLEMENT SETTERS
}
