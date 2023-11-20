
import { it } from 'node:test';
import BuildingsScoreStrategy from '../serve/compiled-js/classes/BuildingsScoreStrategy.js';

describe('BuildingsScoreStrategy', () => {
  it('should return a number', () => {
    const scoreStrategy = new BuildingsScoreStrategy([1, 2, 3, 4, 5, 6]);
    const score = scoreStrategy.score;
    expect(typeof score).toBe('number');
  });
});