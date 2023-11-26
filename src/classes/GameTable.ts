import Player from "./Player.js";
import Die from "./DieClass.js";

export default class GameTable {
  players: Array<Player> = new Array<Player>();
  dice: Array<Die> = new Array<Die>();

  constructor(playerNames: Array<string>) {
    this.validatePlayerNames(playerNames);
    playerNames.forEach((playerName) => {
      this.players.push(new Player(playerName));
    });

    for (let i = 0; i < 6; i++) {
      this.dice.push(new Die());
    }
  }

  private validatePlayerNames(playerNames: unknown) {
    if (!Array.isArray(playerNames)) {
      throw new Error("Player names must be an array");
    }

    const playerNamesArray = playerNames as Array<any>;
    if (playerNamesArray.length < 1) {
      throw new Error("Player names must not be empty");
    }

    if (playerNamesArray.length > 4) {
      throw new Error("There can be no more than 4 players");
    }

    let allNamesAreUnique = true;
    const encounteredNames = new Array<string>();
    for (const playerName of playerNamesArray) {
      if (encounteredNames.includes(playerName)) {
        allNamesAreUnique = false;
        break;
      }
      encounteredNames.push(playerName);
    }

    if (!allNamesAreUnique) {
      throw new Error("Player names must be unique");
    }
  }
}