import Player from "./Player.js";
import Die from "./DieClass.js";
import ThrowResult from "./ThrowResult.js";

export default class GameTable {
  players: Array<Player> = new Array<Player>();
  dice: Array<Die> = new Array<Die>();
  #turns: number = 0;

  constructor(playerNames: Array<string>) {
    this.validatePlayerNames(playerNames);
    playerNames.forEach((playerName) => {
      this.players.push(new Player(playerName));
    });

    for (let i = 0; i < 6; i++) {
      this.dice.push(new Die());
    }
  }

  get currentPlayer(): Player {
    return this.players[this.#turns % this.players.length];
  }

  advanceToNextPlayer() {
    this.#turns++;
  }

  get round(): number {
    return Math.floor(this.#turns / this.players.length) + 1;
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

  get isGameOver(): boolean {
    let numberOfPlayersWithAllScoresSet = 0;
    for (const player of this.players) {
      if (player.allScoresSet) {
        numberOfPlayersWithAllScoresSet++;
      }
    }
    return numberOfPlayersWithAllScoresSet === this.players.length;
  }

  throwUnheldDice(randomCallback: Function): ThrowResult {
    for (const die of this.dice) {
      die.roll(randomCallback);
    }
    return new ThrowResult(this.dice);
  }
}