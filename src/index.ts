import Player from "./classes/Player.js";
import ScoreList from "./classes/ScoreList.js"
import Die from "./classes/DieClass.js";

export default class GameEngine{
  #players : Array<Player>;
  #clickListener : EventListener;

  constructor() {
    this.#players = [];
    this.#clickListener = this.#clickHandler.bind(this);
  }

  prepareGame(){
    const playerNameInputField = document.querySelector('#playerName') as HTMLInputElement
    if (playerNameInputField == null) {
      throw new Error('the input filed #playerName is missing in index.html')
    }
    playerNameInputField.style.display = 'none'

    const buttonElement = document.querySelector('button') as HTMLInputElement
    if (buttonElement == null) {
      throw new Error('the button element is missing in index.html')
    }
    buttonElement.textContent = 'Start'

    buttonElement.addEventListener('click', this.#clickListener);

    window.addEventListener('startNewGame', (event) => {
      const myEvent = event as CustomEvent;
      this.getPlayerNames(myEvent.detail)
    });
  }

  #clickHandler() {
    const numberOfPlayersSelect = document.querySelector('#numberOfPlayers') as HTMLSelectElement; // Select the dropdow
    const selectedValue = numberOfPlayersSelect.value; // Get the selected value
    const newGameEvent = new window.CustomEvent('startNewGame', {
        bubbles: true,
        composed: true,
        detail: selectedValue  // Use the selected value for the detail
    });
    window.dispatchEvent(newGameEvent);
  }

  getPlayerNames(numberOfPlayers: number) {
    const playerNameInputField = document.querySelector('#playerName') as HTMLInputElement
    playerNameInputField.style.display = 'block'

    const selectionField = document.querySelector('#numberOfPlayers') as HTMLInputElement
    selectionField.style.display = 'none'

    const submitButton = document.querySelector('button') as HTMLButtonElement
    submitButton.textContent = 'Submit player1s name'
    submitButton.removeEventListener('click', this.#clickListener)
    this.#clickListener = this.#addPlayerHandler.bind(this, numberOfPlayers);
    submitButton.addEventListener('click', this.#clickListener)
  }

  #addPlayerHandler(numberOfPlayers: number) {
    event?.preventDefault()
    const submitButton = document.querySelector('button') as HTMLButtonElement
    submitButton.disabled = true
    const playerNameInputField = document.querySelector('#playerName') as HTMLInputElement
    const enteredName = playerNameInputField.value

    try {
      const playerToAdd = new Player(enteredName)
      this.#players.push(playerToAdd)
    } catch(error) {
      // if (error instanceof Error) {
      //   alert(error.message);
      // }
      playerNameInputField.value = "";
      return
    }

    if (this.#players.length < numberOfPlayers) {
      console.log(this.#players.length)
      submitButton.textContent = `Submit player${this.#players.length + 1}s name`;
    } else {
      submitButton.removeEventListener('click', this.#clickListener);
      submitButton.style.display = 'none';
    }
    submitButton.disabled = false
  }
}

const engine = new GameEngine();
engine.prepareGame();