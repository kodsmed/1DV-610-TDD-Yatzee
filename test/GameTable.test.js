import { jest } from '@jest/globals';
import GameTable from '../serve/compiled-js/classes/GameTable.js';
import Player from '../serve/compiled-js/classes/Player.js';

describe('GameTable', () => {
  it ('should create a new gameTable', () => {
    const gameTable = new GameTable(['000']);
    expect(gameTable).toBeInstanceOf(GameTable);
  });

  it ('should throw an error if the playerNames is not an array', () => {
    expect(() => {
      new GameTable('000');
    }).toThrow("Player names must be an array");
  });

  it ('should throw an error if the playerNames is an empty array', () => {
    expect(() => {
      new GameTable([]);
    }).toThrow("Player names must not be empty");
  });

  it ('should throw an error if more than 4 players are given', () => {
    expect(() => {
      new GameTable(['1', '2', '3', '4', '5']);
    }).toThrow("There can be no more than 4 players");
  });

  it ('should throw an error if the playerNames are not unique', () => {
    expect(() => {
      new GameTable(['1', '1']);
    }).toThrow("Player names must be unique");

    expect(() => {
      new GameTable(['1', '2', '3', '1']);
    }).toThrow("Player names must be unique");

    expect(() => {
      new GameTable(['1', '2', '3', '4']);
    }).not.toThrow("Player names must be unique");
  });

  it ('should create a field of players with the given names', () => {
    const gameTable = new GameTable(['111', '222', '333', '444']);
    expect(gameTable.players[0].name).toBe('111');
    expect(gameTable.players[1].name).toBe('222');
    expect(gameTable.players[2].name).toBe('333');
    expect(gameTable.players[3].name).toBe('444');
    expect(gameTable.players.length).toBe(4);
  });

  it ('should create a field of six dice', () => {
    const gameTable = new GameTable(['111', '222', '333', '444']);
    expect(gameTable.dice.length).toBe(6);
  });

  it ('should have a getter called currentPlayer', () => {
    const gameTable = new GameTable(['111', '222', '333', '444']);
    expect(gameTable.currentPlayer).toBeInstanceOf(Player);
  });

  it ('should have a method called advanceToNextPlayer', () => {
    const gameTable = new GameTable(['111', '222', '333', '444']);
    expect(gameTable.advancePlayer).toBeInstanceOf(Function);
  });
});

