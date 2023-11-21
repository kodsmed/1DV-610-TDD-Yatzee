import BuildingsScoreStrategy, { BuildingsStrategyType } from '../serve/compiled-js/classes/BuildingsScoreStrategy.js';

describe('BuildingsScoreStrategy', () => {
  it ('should return a number', () => {
    const scoreStrategy = new BuildingsScoreStrategy(
      BuildingsStrategyType.House,
      [1, 2, 3, 4, 5, 6]
    );
    const score = scoreStrategy.score;
    expect(typeof score).toBe('number');
  });

  it ('should return the score for a house', () => {
    const scoreStrategy = new BuildingsScoreStrategy(
      BuildingsStrategyType.House,
      [4, 4, 4, 3, 3, 2]
    );
    const score = scoreStrategy.score;
    expect(score).toBe(4 + 4 + 4 + 3 + 3);
  });

  it ('should return the score for a house', () => {
    const scoreStrategy = new BuildingsScoreStrategy(
      BuildingsStrategyType.House,
      [2, 3, 3, 3, 1, 1]
    );
    const score = scoreStrategy.score;
    expect(score).toBe(3 + 3 + 3 + 1 + 1);
  });

  it ('should return the score for a house', () => {
    const scoreStrategy = new BuildingsScoreStrategy(
      BuildingsStrategyType.House,
      [2, 3, 3, 3, 2, 2]
    );
    const score = scoreStrategy.score;
    expect(score).toBe(3 + 3 + 3 + 2 + 2);
  });

  it ('should return 0 for a broken house', () => {
    const scoreStrategy = new BuildingsScoreStrategy(
      BuildingsStrategyType.House,
      [1, 2, 3, 4, 5, 6]
    );
    const score = scoreStrategy.score;
    expect(score).toBe(0);
  });

  it ('should return 0 for a broken house', () => {
    const scoreStrategy = new BuildingsScoreStrategy(
      BuildingsStrategyType.House,
      [2, 2, 3, 3, 4, 4]
    );
    const score = scoreStrategy.score;
    expect(score).toBe(0);
  });

  it ('should return 0 for a broken house', () => {
    const scoreStrategy = new BuildingsScoreStrategy(
      BuildingsStrategyType.House,
      [2, 1, 3, 3, 3, 4]
    );
    const score = scoreStrategy.score;
    expect(score).toBe(0);
  });

  it ('should return the score for a Villa', () => {
    const scoreStrategy = new BuildingsScoreStrategy(
      BuildingsStrategyType.Villa,
      [4, 4, 4, 3, 3, 3]
    );
    const score = scoreStrategy.score;
    expect(score).toBe(4 + 4 + 4 + 3 + 3 + 3);
  });

  
  it ('should return the score for a Villa', () => {
    const scoreStrategy = new BuildingsScoreStrategy(
      BuildingsStrategyType.Villa,
      [5, 5, 5, 6, 6, 6]
    );
    const score = scoreStrategy.score;
    expect(score).toBe(6 + 6 + 6 + 5 + 5 + 5);
  });

  it ('should return 0 for a broken Villa', () => {
    const scoreStrategy = new BuildingsScoreStrategy(
      BuildingsStrategyType.Villa,
      [4, 4, 4, 1, 3, 3]
    );
    const score = scoreStrategy.score;
    expect(score).toBe(0);
  });

  it ('should return the score for a Tower', () => {
    const scoreStrategy = new BuildingsScoreStrategy(
      BuildingsStrategyType.Tower,
      [4, 4, 4, 4, 3, 3]
    );
    const score = scoreStrategy.score;
    expect(score).toBe(4 + 4 + 4 + 4 + 3 + 3);
  });

  it ('should return 0 for a broken Tower', () => {
    const scoreStrategy = new BuildingsScoreStrategy(
      BuildingsStrategyType.Tower,
      [4, 4, 4, 4, 3, 1]
    );
    const score = scoreStrategy.score;
    expect(score).toBe(0);
  });
});