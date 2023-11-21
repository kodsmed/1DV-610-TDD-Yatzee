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

  constructor() {
    this.ones = null;
    this.twos = null;
    this.threes = null;
    this.fours = null;
    this.fives = null;
    this.sixes = null;
    this.aPair = null;
    this.twoPairs = null;
    this.threePairs = null;
    this.threeOfAKind = null;
    this.fourOfAKind = null;
    this.fiveOfAKind = null;
    this.smallStraight = null;
    this.largeStraight = null;
  }
}
