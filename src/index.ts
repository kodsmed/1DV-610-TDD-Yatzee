export default class GameEngine{
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

    buttonElement.addEventListener('click', () => {
      const numberOfPlayersSelect = document.querySelector('#numberOfPlayers') as HTMLSelectElement; // Select the dropdown

      const selectedValue = numberOfPlayersSelect.value; // Get the selected value

      const newGameEvent = new window.CustomEvent('startNewGame', { 
          bubbles: true, 
          composed: true, 
          detail: selectedValue  // Use the selected value for the detail
      });
      window.dispatchEvent(newGameEvent);
      this.startGame();
    });
  }

  startGame() {
    console.log('Entered startGame')
  }
}

const engine = new GameEngine();
engine.prepareGame();