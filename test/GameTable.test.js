import { jest } from '@jest/globals';
import GameTable from '../serve/compiled-js/classes/GameTable.js';

describe('GameTable', () => {
  it ('should create a new gameTable', () => {
    const gameTable = new GameTable(['']);
    expect(gameTable).toBeInstanceOf(GameTable);
  });

  it ('should throw an error if the playerNames is not an array', () => {
    expect(() => {
      new GameTable('');
    }).toThrow();
  });
});