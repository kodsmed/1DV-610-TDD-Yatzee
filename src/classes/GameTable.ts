export default class GameTable {
  constructor(numberOfPlayers: number) {
    this.validateNumberOfPlayers(numberOfPlayers);
  }

  private validateNumberOfPlayers(numberOfPlayers: number): void {
    if (typeof(numberOfPlayers) !== 'number') {
      throw new Error('The number of players must be a number');
    }

    if (numberOfPlayers < 1) {
      throw new Error('The number of players must be greater than 0');
    }

    if (numberOfPlayers > 4) {
      throw new Error('The number of players must be less than 5');
    }
  }
}