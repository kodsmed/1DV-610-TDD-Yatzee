export default class GameTable {
  constructor(playerNames: Array<string>) {
    this.validatePlayerNames(playerNames);
  }

  private validatePlayerNames(playerNames: unknown) {
    if (!Array.isArray(playerNames)) {
      throw new Error("Player names must be an array");
    }

    const playerNamesArray = playerNames as Array<any>;
    if (playerNamesArray.length < 1) {
      throw new Error("Player names must not be empty");
    }

    for (const playerName of playerNamesArray) {
      if (typeof playerName !== "string") {
        throw new Error("Player names must be strings");
      }
    }

    if (playerNamesArray.length > 4) {
      throw new Error("There can be no more than 4 players");
    }
  }
}