export default class GameTable {
  constructor(numberOfPlayers: number) {
    if (typeof(numberOfPlayers) !== 'number') {
      throw new Error('The number of players must be a number');
    }

    if (numberOfPlayers < 1) {
      throw new Error('The number of players must be greater than 0');
    }

  }
}