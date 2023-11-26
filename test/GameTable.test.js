import { jest } from '@jest/globals';
import GameTable from '../serve/compiled-js/classes/GameTable.js';

describe('GameTable', () => {
  it ('should create a new gameTable', () => {
    const gameTable = new GameTable(1);
    expect(gameTable).toBeInstanceOf(GameTable);
  });

  it ('should throw an error if the number of players is not a number', () => {
    expect(() => new GameTable('1')).toThrowError('The number of players must be a number');
  });

  it ('should throw an error if the number of players is less than 1', () => {
    expect(() => new GameTable(0)).toThrowError('The number of players must be greater than 0');
  });

  it ('should throw an error if the number of players is greater than 4', () => {
    expect(() => new GameTable(5)).toThrowError('The number of players must be less than 5');
  });
});