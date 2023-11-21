import { jest } from '@jest/globals';
import FaceValuesScoreStrategy from '../serve/compiled-js/classes/FaceValuesScoreStrategy.js';

// Mock the ThrowResult class so we can control the rollResult
const ThrowResult = jest.fn().mockImplementation((rollResult) => {
  return {
    rollResult: rollResult
  }
});
const throwResults = populateThrowResults();

describe('FaceValueScoreStrategy', () => {

  it('should be defined', () => {
    expect(FaceValuesScoreStrategy).toBeDefined();
  });

  it('should return a number', () => {
    const scoreStrategy = new FaceValuesScoreStrategy(1, throwResults[0]);
    const score = scoreStrategy.score;
    expect(typeof score).toBe('number');
  });

  describe('should return the sum of the face values of the given number', () => {
    const faceValues = [1, 2, 3, 4, 5, 6];
    for (let i = 0; i < faceValues.length; i++) {
      testScoresForFaceValue(faceValues[i]);
    }
  });
});

function populateThrowResults() {
  const throwResults = [];
  throwResults.push(ThrowResult([1, 1, 1, 1, 1, 1]));
  throwResults.push(ThrowResult([2, 2, 2, 2, 2, 2]));
  throwResults.push(ThrowResult([3, 3, 3, 3, 3, 3]));
  throwResults.push(ThrowResult([4, 4, 4, 4, 4, 4]));
  throwResults.push(ThrowResult([5, 5, 5, 5, 5, 5]));
  throwResults.push(ThrowResult([6, 6, 6, 6, 6, 6]));
  throwResults.push(ThrowResult([1, 2, 3, 4, 5, 6]));
  throwResults.push(ThrowResult([6, 5, 4, 3, 2, 1]));
  throwResults.push(ThrowResult([1, 1, 1, 2, 2, 2]));
  throwResults.push(ThrowResult([1, 1, 1, 1, 2, 2]));
  throwResults.push(ThrowResult([1, 1, 1, 1, 1, 2]));
  throwResults.push(ThrowResult([1, 1, 1, 1, 2, 3]));
  throwResults.push(ThrowResult([1, 1, 1, 2, 2, 3]));
  throwResults.push(ThrowResult([1, 1, 2, 2, 2, 3]));
  throwResults.push(ThrowResult([1, 2, 2, 2, 2, 3]));
  throwResults.push(ThrowResult([1, 2, 3, 4, 5, 6]));
  throwResults.push(ThrowResult([6, 5, 4, 3, 2, 1]));
  throwResults.push(ThrowResult([1, 1, 1, 2, 2, 2]));
  return throwResults;
}

function testScoresForFaceValue(faceValue) {
  describe(`when the face value is ${faceValue}`, () => {
    const expectedScores = populateExpectedScores(faceValue);
    for (let i = 0; i < throwResults.length; i++) {
      it(`should return ${expectedScores[i]} for ${throwResults[i].rollResult} when scored as: ${faceValue}s`, () => {
        testScore(expectedScores[i], throwResults[i], faceValue);
      });
    }
  });
}

function populateExpectedScores(faceValue) {
  const expectedScores = [];
  for (let i = 0; i < throwResults.length; i++) {
    expectedScores.push(throwResults[i].rollResult.reduce((acc, value) => {
      if (value === faceValue) {
        acc += value;
      }
      return acc;
    }, 0));
  }
  return expectedScores;
}

function testScore(score, throwResult, faceValue) {
  let scoreStrategy = new FaceValuesScoreStrategy(faceValue, throwResult);
  let scoreResult = scoreStrategy.score;
  expect(scoreResult).toBe(score);
}