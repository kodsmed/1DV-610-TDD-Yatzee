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
    }).toThrow("Player names must be an array");
  });

  it ('should throw an error if the playerNames is an empty array', () => {
    expect(() => {
      new GameTable([]);
    }).toThrow("Player names must not be empty");
  });

  it ('should throw and error if more than 4 players are given', () => {
    expect(() => {
      new GameTable(['1', '2', '3', '4', '5']);
    }).toThrow("There can be no more than 4 players");
  });
});