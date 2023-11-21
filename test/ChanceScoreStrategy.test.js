import ChanceScoreStrategy from '../serve/compiled-js/classes/ChanceScoreStrategy.js';

describe('ChanceScoreStrategy', () => {
  it ('should return a number', () => {
    const scoreStrategy = new ChanceScoreStrategy([1, 2, 3, 4, 5, 6]);
    const score = scoreStrategy.score;
    expect(typeof score).toBe('number');
  });
});