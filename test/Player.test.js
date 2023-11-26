import { jest } from '@jest/globals';
import Player from '../serve/compiled-js/classes/Player.js';

describe('Player', () => {
  it ('should create a new player with a name', () => {
    const player = new Player('Nickname');
    expect(player.name).toBe('Nickname');
  });
});