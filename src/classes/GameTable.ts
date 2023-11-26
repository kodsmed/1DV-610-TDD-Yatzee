export default class GameTable {
  constructor(playerNames: Array<string>) {
    this.validatePlayerNames(playerNames);
  }

  private validatePlayerNames(playerNames: unknown) {
    if (!Array.isArray(playerNames)) {
      throw new Error("Player names must be an array");
    }
  }
}