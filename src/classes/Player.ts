import ScoreList from "./ScoreList.js";

export default class Player {
  #nickname: String;
  #scoreList: ScoreList;

  constructor(nickname: String){
    this.#nickname = nickname;
    this.#scoreList = new ScoreList();
  }

  get name() : String {
    return this.#nickname;
  }

  get scoreList() : ScoreList {
    return this.#scoreList;
  }
}