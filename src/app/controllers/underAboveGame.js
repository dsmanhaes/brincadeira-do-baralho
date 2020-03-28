import Deck from '../models/deck'
import { deckTypes } from '../../database/deckList'

const hit = 10
const fault = 5

class UnderAboveGame {
  constructor () {
    this.name = 'Under Above Game'
  }

  static get difficulty () {
    return { easy: 100, medium: 50, hard: 0 }
  }

  static get response () {
    return { right: 'right', wrong: 'wrong' }
  }

  static mainMessage (language) {
    return language.messages.underAbove.main
  }

  startGame (difficulty) {
    this.score = difficulty
    this.deck = new Deck(deckTypes.Full)
  }

  turn (language) {
    return this.deck.getCards(1)[0].toText(language)
  }

  makeChoice (option) {
    const deck = this.deck
    const current = deck.deck[deck.index - 1].value
    const next = deck.deck[deck.index].value
    const isJoker = isNaN(next) || isNaN(current)
    const isAbove = option === 'above' && (next >= current || isJoker)
    const isUnder = option === 'under' && (next <= current || isJoker)
    const isUnderAbove = option === 'above' || option === 'under'
    let response

    if (!isUnderAbove) {
      deck.index--
    } else if (isAbove || isUnder) {
      this.score += hit
      response = UnderAboveGame.response.right
    } else {
      this.score -= fault
      response = UnderAboveGame.response.wrong
    }

    this.checkEndGame()
    return response
  }

  checkEndGame () {
    if (this.score <= 0) {
      this.endGame = true
      this.lose = true
    }
    if (this.deck.index === this.deck.deck.length - 1) {
      this.endGame = true
      this.win = true
    }
  }
}

export default UnderAboveGame
