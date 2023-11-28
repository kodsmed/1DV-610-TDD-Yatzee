function startGame(){
  const playerNameInputField = document.querySelector('#playerName') as HTMLInputElement
  if (playerNameInputField == null) {
    throw new Error('the input filed #playerName is missing in index.html')
  }
  playerNameInputField.style.display = 'none'
}


startGame();