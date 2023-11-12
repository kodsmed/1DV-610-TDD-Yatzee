export enum DieState {
  Active = 'Active',
  Held = 'Held'
}

export default class Die {
  #faceValue: number;
  #state: DieState;

  constructor(){
    this.#faceValue = this.roll();
    this.#state = DieState.Active;
  }

  roll(): number {
    if (this.#state === DieState.Held) {
      return Number(this.#faceValue);
    }
    const rollResult = Math.floor(Math.random() * 6) + 1;
    this.#faceValue = rollResult;
    return rollResult;
  }

  get faceValue(): number {
    return Number(this.#faceValue);
  }

  get state(): DieState {
    return this.#state;
  }

  setState(newState: DieState) {
    this.#state = newState;
  }
}