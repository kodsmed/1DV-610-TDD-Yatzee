import ScoreList from "./ScoreList.js";

export default class Player {
  #nickname: String;
  #scoreList: ScoreList;

  constructor(nickname: String){
    this.validateNickname(nickname);
    this.#nickname = nickname;
    this.#scoreList = new ScoreList();
  }

  get name() : String {
    return this.#nickname;
  }

  get scoreList() : ScoreList {
    return this.#scoreList;
  }

  get score () : number {
    return this.#scoreList.score;
  }

  get allScoresSet() {
    return 'a'
  }

  private validateNickname(nickname: unknown) {
    if (typeof nickname !== "string") {
      throw new Error("Player name must be a string");
    }

    if (nickname.length < 1) {
      throw new Error("Player name must not be empty");
    }

    if (nickname.length < 3) {
      throw new Error("Player name must be at least 3 characters long");
    }

    if (nickname.length > 32) {
      throw new Error("Player name must not be longer than 32 characters");
    }
  }
}