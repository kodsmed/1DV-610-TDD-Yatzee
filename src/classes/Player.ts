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

  private validateNickname(nickname: unknown) {
    if (typeof nickname !== "string") {
      throw new Error("Player name must be a string");
    }
  }
}