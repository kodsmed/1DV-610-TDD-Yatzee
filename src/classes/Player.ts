export default class Player {

  #nickname: String;

  constructor(nickname: String){
    this.#nickname = nickname;
  }

  get name() : String {
    return this.#nickname;
  }
}