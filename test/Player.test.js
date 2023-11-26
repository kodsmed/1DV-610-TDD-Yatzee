import { jest } from '@jest/globals';
import Player from '../serve/compiled-js/classes/Player.js';
import ScoreList from '../serve/compiled-js/classes/ScoreList.js';


describe('Player', () => {
  it ('should create a new player with a name', () => {
    const player = new Player('Nickname');
    expect(player.name).toBe('Nickname');
  });

  it ('should have a scoreList', () => {
    const player = new Player('Nickname');
    expect(player.scoreList).toBeInstanceOf(ScoreList);
  });
});