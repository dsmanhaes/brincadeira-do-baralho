import UnderAboveGame from './underAboveGame'

const gamesList = {
  underabove: UnderAboveGame
}

class GameChooser {
  constructor (game) {
    this.GameLoader = gamesList[game]
    this.game = new this.GameLoader()
  }

  selectDifficulty (difficulty) {
    this.game.startGame(this.GameLoader.difficulty[difficulty])
  }
}

export default GameChooser
