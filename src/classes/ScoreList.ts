import ThrowResult from "./ThrowResult.js";
import ScoreStrategy from "./../ScoreStrategy.js";
import FacesValuesScoreStrategy from "./FaceValuesScoreStrategy.js";
import PairsScoreStrategy from "./PairsScoreStrategy.js";
import NOfAKindScoreStrategy from "./NOfAKindScoreStrategy.js";
import StraitsScoreStrategy from "./StraitsScoreStrategy.js";
import BuildingsScoreStrategy from "./BuildingsScoreStrategy.js";
import ChanceScoreStrategy from "./ChanceScoreStrategy.js";
import NullScoreStrategy from "./NullScoreStrategy.js";

export default class ScoreList {
  ones: any;
  twos: any;

  constructor() {
    this.ones = null;
    this.twos = null;
  }
}
