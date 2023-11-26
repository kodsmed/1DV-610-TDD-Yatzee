import { jest } from '@jest/globals';
import Player from '../serve/compiled-js/classes/Player.js';
import Die, { DieState } from '../serve/compiled-js/classes/DieClass.js';
import GameTable from '../serve/compiled-js/classes/GameTable.js';
import ThrowResult from '../serve/compiled-js/classes/ThrowResult.js';

describe('GameTable', () => {
  it('should create a new gameTable', () => {
    const gameTable = new GameTable(['000']);
    expect(gameTable).toBeInstanceOf(GameTable);
  });

  it('should throw an error if the playerNames is not an array', () => {
    expect(() => {
      new GameTable('000');
    }).toThrow("Player names must be an array");
  });

  it('should throw an error if the playerNames is an empty array', () => {
    expect(() => {
      new GameTable([]);
    }).toThrow("Player names must not be empty");
  });

  it('should throw an error if more than 4 players are given', () => {
    expect(() => {
      new GameTable(['1', '2', '3', '4', '5']);
    }).toThrow("There can be no more than 4 players");
  });

  it('should throw an error if the playerNames are not unique', () => {
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

  it('should create a field of players with the given names', () => {
    const gameTable = new GameTable(['111', '222', '333', '444']);
    expect(gameTable.players[0].name).toBe('111');
    expect(gameTable.players[1].name).toBe('222');
    expect(gameTable.players[2].name).toBe('333');
    expect(gameTable.players[3].name).toBe('444');
    expect(gameTable.players.length).toBe(4);
  });

  it('should create a field of six dice', () => {
    const gameTable = new GameTable(['111', '222', '333', '444']);
    expect(gameTable.dice.length).toBe(6);
  });

  it('should have a getter called currentPlayer', () => {
    const gameTable = new GameTable(['111', '222', '333', '444']);
    expect(gameTable.currentPlayer).toBeInstanceOf(Player);
    expect(gameTable.currentPlayer.name).toBe('111');
  });

  it('should have a method called advanceToNextPlayer', () => {
    const gameTable = new GameTable(['111', '222', '333', '444']);
    expect(gameTable.advanceToNextPlayer).toBeInstanceOf(Function);
  });

  it('advanceToNextPlayer should advance the currentPlayer to the next player', () => {
    const gameTable = new GameTable(['111', '222', '333', '444']);
    expect(gameTable.currentPlayer.name).toBe('111');
    gameTable.advanceToNextPlayer();
    expect(gameTable.currentPlayer.name).toBe('222');
    gameTable.advanceToNextPlayer();
    expect(gameTable.currentPlayer.name).toBe('333');
    gameTable.advanceToNextPlayer();
    expect(gameTable.currentPlayer.name).toBe('444');
    gameTable.advanceToNextPlayer();
    expect(gameTable.currentPlayer.name).toBe('111');
  });

  it('should have a getter called round', () => {
    const gameTable = new GameTable(['111', '222', '333', '444']);
    expect(gameTable.round).toBe(1);
  });

  it('round should increase by 1 after each player has played', () => {
    const gameTable = new GameTable(['111', '222', '333', '444']);
    expect(gameTable.round).toBe(1);
    for (let i = 0; i < 4; i++) {
      gameTable.advanceToNextPlayer();
    }
    expect(gameTable.round).toBe(2);
    for (let i = 0; i < 4; i++) {
      gameTable.advanceToNextPlayer();
    }
    expect(gameTable.round).toBe(3);
  });

  it('should have a getter called isGameOver', () => {
    const gameTable = new GameTable(['111', '222', '333', '444']);
    expect(gameTable.isGameOver).toBe(false);
  });

  it('isGameOver should return true if all players have filled their scoreLists', () => {
    const gameTable = new GameTable(['111', '222', '333', '444']);
    expect(gameTable.isGameOver).toBe(false);

    const mockAllScoresSet = jest
      .spyOn(Player.prototype, 'allScoresSet', 'get')
      .mockImplementation(() => {
        return true;
      });
    expect(gameTable.isGameOver).toBe(true);
  });

  it('should have a method to thrown all unHeld dice', () => {
    const gameTable = new GameTable(['111', '222', '333', '444']);
    expect(gameTable.throwUnheldDice).toBeInstanceOf(Function);
  });

  it('throwUnheldDice should throw all unHeld dice and return a throwResult', () => {
    const gameTable = new GameTable(['111', '222', '333', '444']);
    const Die1 = new Die(() => { return 1 });
    const Die2 = new Die(() => { return 2 });
    const Die3 = new Die(() => { return 3 });
    const Die4 = new Die(() => { return 4 });
    const Die5 = new Die(() => { return 5 });
    const Die6 = new Die(() => { return 6 });
    Die1.setState(DieState.Held);
    Die2.setState(DieState.Held);
    Die3.setState(DieState.Held);
    const mockedRoller = jest
      .spyOn(Die.prototype, 'roller')
      .mockImplementation(() => {
        return 6;
      });
    gameTable.dice = [Die1, Die2, Die3, Die4, Die5, Die6];
    const throwResult = gameTable.throwUnheldDice();
    expect(throwResult).toBeInstanceOf(ThrowResult);
    expect(throwResult.rollResult[0]).toBe(1);
    expect(throwResult.rollResult[1]).toBe(2);
    expect(throwResult.rollResult[2]).toBe(3);
    expect(throwResult.rollResult[3]).toBe(6);
    expect(throwResult.rollResult[4]).toBe(6);
    expect(throwResult.rollResult[5]).toBe(6);
  });
});