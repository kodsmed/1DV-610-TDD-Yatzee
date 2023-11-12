import { expect, jest } from '@jest/globals'
import YatzeeScoreStrategy from '../serve/compiled-js/classes/YatzeeScoreStrategy.js';
import { describe } from 'node:test';

// Mock the ThrowResult class so we can control the rollResult
const ThrowResult = jest.fn().mockImplementation((rollResult) => {
  return {
    rollResult: rollResult
  }
});
const throwResults = populateThrowResults();

describe('YatzeeScoreStrategy', () => {

  it('should be defined', () => {
    expect(YatzeeScoreStrategy).toBeDefined();
  });

  it('should return a number', () => {
    const scoreStrategy = new YatzeeScoreStrategy(throwResults[0]);
    const score = scoreStrategy.score;
    expect(typeof score).toBe('number');
  });

  describe('100 or 0 when given numbers', () => {
    testScoresForFaceValue();
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

function testScoresForFaceValue() {
  describe(`when attempting Yatzee`, () => {
    const expectedScores = populateExpectedScores();
    for (let i = 0; i < throwResults.length; i++) {
      it(`should return ${expectedScores[i]} for ${throwResults[i].rollResult} when scored as: Yatzee`, () => {
        testScore(expectedScores[i], throwResults[i])
      })
    }
  })
}

function populateExpectedScores() {
  const expectedScores = [];
  for (let i = 0; i < throwResults.length; i++) {
    const rollNumbers = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 };
    const rollResult = throwResults[i].rollResult;
    for (let j = 0; j < rollResult.length; j++) {
      rollNumbers[rollResult[j]]++;
    }
    let score = 0;
    for (let key = 6; key > 0; key--) {
      if (rollNumbers[key] === 6) {
        score = 100;
      }
    }
    expectedScores.push(score);
  }
  return expectedScores;
}

function testScore(score, throwResult) {
  let scoreStrategy = new YatzeeScoreStrategy(throwResult);
  let scoreResult = scoreStrategy.score;
  expect(scoreResult).toBe(score);
}