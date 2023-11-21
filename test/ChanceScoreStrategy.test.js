import { jest } from '@jest/globals';
import ChanceScoreStrategy from '../serve/compiled-js/classes/ChanceScoreStrategy.js';

// Mock the ThrowResult class so we can control the rollResult
const ThrowResult = jest.fn().mockImplementation((rollResult) => {
  return {
    rollResult: rollResult
  }
});

describe('ChanceScoreStrategy', () => {

  it ('should return a number', () => {
    const scoreStrategy = new ChanceScoreStrategy(ThrowResult([1, 2, 3, 4, 5, 6]));
    const score = scoreStrategy.score;
    expect(typeof score).toBe('number');
  });

  function getRandomNumberArray() {
    const randomNumberArray = [];
    for (let i = 0; i < 5; i++) {
      randomNumberArray.push(Math.floor(Math.random() * 6) + 1);
    }

    return randomNumberArray;
  }

  function getArraySum(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      sum += array[i]
    }

    return sum;
  }

  it ('should return the correct score for a chance', () => {
    let mismatchDetected = false;
    for (let i = 0; i < 20; i++) {
      const array = getRandomNumberArray();
      const scoreStrategy = new ChanceScoreStrategy(ThrowResult(array));
      const score = scoreStrategy.score;
      if (score != getArraySum(array)) {
        mismatchDetected = true;
        console.log(
          'mismatch detected\n'
          + 'array: ', array
          + '\nscore: ', score
          + '\nexpected: ', getArraySum(array)
        );
      }
    }
    expect(mismatchDetected).toBe(false);
  });
});
