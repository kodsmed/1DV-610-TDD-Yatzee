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
  }
}

const engine = new GameEngine();
engine.prepareGame();