import { jest } from '@jest/globals';
import NOfAKindScoreStrategy from '../serve/compiled-js/classes/NOfAKindScoreStrategy.js';

// Mock the ThrowResult class so we can control the rollResult
const ThrowResult = jest.fn().mockImplementation((rollResult) => {
  return {
    rollResult: rollResult
  }
});
const throwResults = populateThrowResults();

describe('NOfAKindScoreStrategy', () => {

  it('should be defined', () => {
    expect(NOfAKindScoreStrategy).toBeDefined();
  });

  it('should return a number', () => {
    const scoreStrategy = new NOfAKindScoreStrategy(1, throwResults[0]);
    const score = scoreStrategy.score;
    expect(typeof score).toBe('number');
  });

  describe('should return the sum of the face values of the given number', () => {
    const ofAKindQuantity = [3, 4, 5];
    for (let i = 0; i < ofAKindQuantity.length; i++) {
      testScoresForFaceValue(ofAKindQuantity[i]);
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

function testScoresForFaceValue(numberOfAKind) {
  describe(`when attempting ${numberOfAKind} of a kind`, () => {
    const expectedScores = populateExpectedScores(numberOfAKind);
    for (let i = 0; i < throwResults.length; i++) {
      it(`should return ${expectedScores[i]} for ${throwResults[i].rollResult} when scored as: ${numberOfAKind} of a kind`, () => {
        testScore(expectedScores[i], throwResults[i], numberOfAKind)
      })
    }
  })
}

function populateExpectedScores(numberOfAKind) {
  const expectedScores = [];
  for (let i = 0; i < throwResults.length; i++) {
    const rollNumbers = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 };
    const rollResult = throwResults[i].rollResult;
    for (let j = 0; j < rollResult.length; j++) {
      rollNumbers[rollResult[j]]++;
    }
    let score = 0;
    let foundOfAKind = false;
    for (let key = 6; key > 0; key--) {
      if (rollNumbers[key] >= numberOfAKind && !foundOfAKind) {
        foundOfAKind = true;
        score = key * numberOfAKind;
      }
    }
    expectedScores.push(score);
  }
  return expectedScores;
}

function testScore(score, throwResult, numberOfAKind) {
  let scoreStrategy = new NOfAKindScoreStrategy(numberOfAKind, throwResult);
  let scoreResult = scoreStrategy.score;
  expect(scoreResult).toBe(score);
}