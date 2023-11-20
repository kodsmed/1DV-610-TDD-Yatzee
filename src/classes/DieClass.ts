export enum DieState {
  Active = 'Active',
  Held = 'Held'
}

export default class Die {
  #faceValue: number;
  #state: DieState;

  /**
   * Creates a new Die instance.
   * The randomCallback parameter is used to inject a random number generator for testing purposes,
   * if no callback is provided, the default callback will be used.
   * The default callback will return a random number between 1 and 6.
   *
   * @param randomCallback function to be used as a callback for the random number generator.
   */
  constructor(randomCallback: Function = () => {return (Math.floor(Math.random() * 6) + 1)}) {
    this.#faceValue = this.roll(randomCallback);
    this.#state = DieState.Active;
  }

  roll(randomCallback: Function): number {
    if (this.#state === DieState.Held) {
      return Number(this.#faceValue);
    }
    const rollResult = this.roller(randomCallback);
    this.#faceValue = rollResult;
    return rollResult;
  }

  private roller(randomCallback: Function = () => {return (Math.floor(Math.random() * 6) + 1)}): number {
    return randomCallback();
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