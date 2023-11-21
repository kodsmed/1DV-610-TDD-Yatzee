import NullScoreStrategy from '../serve/compiled-js/classes/NullScoreStrategy.js';

describe('NullScoreStrategy', () => {

  it ('should return a number', () => {
    const scoreStrategy = new NullScoreStrategy();
    const score = scoreStrategy.score;
    expect(typeof score).toBe('number');
  });

  it ('should return 0', () => {
    const scoreStrategy = new NullScoreStrategy();
    const score = scoreStrategy.score;
    expect(score).toBe(0);
  });
});