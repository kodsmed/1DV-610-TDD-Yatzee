export default class Die {
  #faceValue: number;

  constructor(){
    this.#faceValue = this.roll();
  }

  roll(): number {
    const rollResult = Math.floor(Math.random() * 6) + 1;
    this.#faceValue = rollResult;
    return rollResult;
  }

  get faceValue(): number {
    return Number(this.#faceValue);
  }
}