import { jest } from '@jest/globals';
import StraitsScoreStrategy from '../serve/compiled-js/classes/StraitsScoreStrategy.js';

// Mock the ThrowResult class so we can control the rollResult
const ThrowResult = jest.fn().mockImplementation((rollResult) => {
  return {
    rollResult: rollResult
  }
});
const throwResults = populateThrowResults();

describe('StraitsScoreStrategy', () => {

  it('should be defined', () => {
    expect(StraitsScoreStrategy).toBeDefined();
  });

  it('should return a number', () => {
    const scoreStrategy = new StraitsScoreStrategy([1, 2, 3, 4, 5, 6], throwResults[0]);
    const score = scoreStrategy.score;
    expect(typeof score).toBe('number');
  });

  describe('should return the sum of the face values of the given number', () => {
    const smallStrait = [1, 2, 3, 4, 5];
    const bigStrait = [2, 3, 4, 5, 6];
    const fullStrait = [1, 2, 3, 4, 5, 6];
    const kindsOfStraits =[smallStrait, bigStrait, fullStrait];
    for (let i = 0; i < kindsOfStraits.length; i++) {
      testScoresForFaceValue(kindsOfStraits[i]);
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

function testScoresForFaceValue(kindOfStrait) {
  let kindString = "";
  if (kindOfStrait.length === 5 && kindOfStrait[0] === 1) {
    kindString = "small straight";
  } else if (kindOfStrait.length === 5 && kindOfStrait[0] === 2) {
    kindString = "big straight";
  } else if (kindOfStrait.length === 6) {
    kindString = "full straight";
  }

  describe(`when attempting a ${kindString}`, () => {
    const expectedScores = populateExpectedScores(kindOfStrait);
    for (let i = 0; i < throwResults.length; i++) {
      it(`should return ${expectedScores[i]} for ${throwResults[i].rollResult} when scored as: ${kindString}`, () => {
        testScore(expectedScores[i], throwResults[i], kindOfStrait)
      })
    }
  })
}

function populateExpectedScores(kindOfStrait) {
  const expectedScores = [];
  const expectedStraitString = kindOfStrait.sort().toString();
  for (let i = 0; i < throwResults.length; i++) {
    let score = 0;
    const throwString = throwResults[i].rollResult.sort().toString();
    if (throwString.includes(expectedStraitString)) {
      score = kindOfStrait.reduce((acc, value) => {
        acc += value;
        return acc;
      }, 0);
    }
    expectedScores.push(score);
  }

  return expectedScores;
}

function testScore(score, throwResult, kindOfStraight) {
  let scoreStrategy = new StraitsScoreStrategy(kindOfStraight, throwResult);
  let scoreResult = scoreStrategy.score;
  expect(scoreResult).toBe(score);
}