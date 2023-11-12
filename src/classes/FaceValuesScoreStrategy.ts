import ThrowResult from './ThrowResult.js';
import ScoreStrategy from './../ScoreStrategy.js';

export default class FacesValuesScoreStrategy implements ScoreStrategy{
  #expectedNumber: number;
  #throwResult: ThrowResult;

  constructor(number: number, throwResult: ThrowResult) {
    this.#expectedNumber = number;
    this.#throwResult = throwResult;
  }

  get score(): number {
    let score: number = 0;
    for (const faceValue of this.#throwResult.rollResult) {
      if (faceValue === this.#expectedNumber) {
        score += faceValue as number;
      }
    }
    return score;
  }

}