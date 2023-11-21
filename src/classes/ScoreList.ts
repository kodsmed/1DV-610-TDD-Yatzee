import ThrowResult from "./ThrowResult.js";
import ScoreStrategy from "./../ScoreStrategy.js";
import FacesValuesScoreStrategy from "./FaceValuesScoreStrategy.js";
import PairsScoreStrategy from "./PairsScoreStrategy.js";
import NOfAKindScoreStrategy from "./NOfAKindScoreStrategy.js";
import StraitsScoreStrategy from "./StraitsScoreStrategy.js";
import BuildingsScoreStrategy from "./BuildingsScoreStrategy.js";
import ChanceScoreStrategy from "./ChanceScoreStrategy.js";
import YatzeeScoreStrategy from "./YatzeeScoreStrategy.js";
import NullScoreStrategy from "./NullScoreStrategy.js";

export default class ScoreList {
  ones: any;
  twos: any;
  threes: any;
  fours: any;
  fives: any;
  sixes: any;
  aPair: any;
  twoPairs: any;
  threePairs: any;
  threeOfAKind: any;
  fourOfAKind: any;
  fiveOfAKind: any;
  smallStraight: any;
  largeStraight: any;
  fullStraight: any;
  house: any;
  villa: any;
  tower: any;
  chance: any;
  yatzee: any;

  constructor() {
    this.ones = new NullScoreStrategy();
    this.twos = new NullScoreStrategy();
    this.threes = new NullScoreStrategy();
    this.fours = new NullScoreStrategy();
    this.fives = new NullScoreStrategy();
    this.sixes = new NullScoreStrategy();
    this.aPair = new NullScoreStrategy();
    this.twoPairs = new NullScoreStrategy();
    this.threePairs = new NullScoreStrategy();
    this.threeOfAKind = new NullScoreStrategy();
    this.fourOfAKind = new NullScoreStrategy();
    this.fiveOfAKind = new NullScoreStrategy();
    this.smallStraight = new NullScoreStrategy();
    this.largeStraight = new NullScoreStrategy();
    this.fullStraight = new NullScoreStrategy();
    this.house = new NullScoreStrategy();
    this.villa = new NullScoreStrategy();
    this.tower = new NullScoreStrategy();
    this.chance = new NullScoreStrategy();
    this.yatzee = new NullScoreStrategy();
  }

  // TODO: IMPLEMENT SETTERS
}
