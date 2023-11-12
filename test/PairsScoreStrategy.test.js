import { expect, jest } from '@jest/globals'
import PairsScoreStrategy from '../serve/compiled-js/classes/PairsScoreStrategy.js'
import { describe } from 'node:test'

// Mock ThrowResult class so we can control the rollResult
const ThrowResult = jest.fn().mockImplementation((rollResult) => {
  return {
    rollResult: rollResult
  }
});
const throwResults = populateThrowResults();

describe('PairScoreStrategy', () => {

  it('should be defined', () => {
    expect(PairsScoreStrategy).toBeDefined();
  });

  it('should return a number', () => {
    const scoreStrategy = new PairsScoreStrategy(1, throwResults[0]);
    const score = scoreStrategy.score;
    expect(typeof score).toBe('number');
  });

  describe('should return the sum of the pair(s) of the given numbers', () => {
    const numberOfPairs = [1, 2, 3];
    for (let i = 0; i < numberOfPairs.length; i++) {
      testScoresForPairs(numberOfPairs[i]);
    }
  })
})

function testScoresForPairs(numberOfPairs) {
  describe(`when the number of pairs is ${numberOfPairs}`, () => {
    const expectedScores = populateExpectedScores(numberOfPairs);
    for (let i = 0; i < throwResults.length; i++) {
      it(`should return ${expectedScores[i]} for ${throwResults[i].rollResult} when expecting ${numberOfPairs} pair(s)`, () => {
        testScore(expectedScores[i], throwResults[i], numberOfPairs)
      })
    }
  })
}

function populateExpectedScores(numberOfPairs) {
  const expectedScores = [];
  for (let i = 0; i < throwResults.length; i++) {
    const rollNumbers = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 };
    const rollResult = throwResults[i].rollResult;
    for (let j = 0; j < rollResult.length; j++) {
      rollNumbers[rollResult[j]]++;
    }
    let score = 0;
    let foundPairs = 0;
    for (let key = 6; key > 0; key--) {
      if (rollNumbers[key] >= 2 && foundPairs < numberOfPairs) {
        foundPairs++;
        score += key * 2;
      }
    }
    if (foundPairs < numberOfPairs) {
      score = 0;
    }
    expectedScores.push(score);
  }
  return expectedScores;
}

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
  throwResults.push(ThrowResult([1, 2, 2, 2, 3, 3]));
  throwResults.push(ThrowResult([1, 2, 3, 4, 5, 6]));
  throwResults.push(ThrowResult([6, 5, 4, 3, 2, 1]));
  throwResults.push(ThrowResult([1, 1, 1, 2, 2, 2]));
  return throwResults;
}

function testScore(score, throwResult, numberOfPairs) {
  let scoreStrategy = new PairsScoreStrategy(numberOfPairs, throwResult);
  let scoreResult = scoreStrategy.score;
  expect(scoreResult).toBe(score);
}