import UnderAboveGame from './underAboveGame'
import BlackjackGame from './blackjackGame'

const gamesList = {
  underabove: UnderAboveGame,
  blackjack: BlackjackGame
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
