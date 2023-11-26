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

  it ('should throw an error if the name is not a string', () => {
    expect(() => {
      new Player(1);
    }).toThrow("Player name must be a string");
  });

  it ('should throw an error if the name is an empty string', () => {
    expect(() => {
      new Player('');
    }).toThrow("Player name must not be empty");
  });

  it ('should throw an error if the name is too short (less than 3 characters)', () => {
    expect(() => {
      new Player('ab');
    }).toThrow("Player name must be at least 3 characters long");
  });

  it ('should throw an error if the name is too long (more than 32 characters)', () => {
    expect(() => {
      new Player('0123456789012345678901234567890123');
    }).toThrow("Player name must not be longer than 32 characters");
  });

  it ('should have a getter called score', () => {
    const player = new Player('Nickname');
    expect(player.score).toBe(0);
  });

  it ('score should be the sum of all scores in the scoreList', () => {
    const mockedScoreList = jest
      .spyOn(ScoreList.prototype, 'score', 'get')
      .mockImplementation(() => {
        return 21
      });

    const player = new Player('Nickname');
    expect(player.score).toBe(21);
  });

  it ('should have a getter called allScoresSet', () => {
    const player = new Player('Nickname');
    expect(player.allScoresSet).toBeDefined();
  });

  it ('should return false for allScoresSet if not all scores are set', () => {
    const mockedScoreList = jest
      .spyOn(ScoreList.prototype, 'allScoresSet', 'get')
      .mockImplementation(() => {
        return false
      });

    const player = new Player('Nickname');
    expect(player.allScoresSet).toBe(false);
  });
});