import Deck from '../models/deck'
import { deckTypes, specialCards } from '../../database/deckList'

class BlackjackGame {
  constructor () {
    this.name = 'Blackjack Game'
  }

  static get response () {
    return { right: 'right', wrong: 'wrong' }
  }

  mainMessage (language) {
    return language.messages.blackjack.main
  }

  startGame () {
    this.score = {
      player: 0,
      dealer: 0
    }
    this.dealerCards = []
    this.deck = new Deck(deckTypes.Blackjack)
  }

  drawTwoCards () {
    const card_1 = this.deck.getCards(1)[0]
    const card_2 = this.deck.getCards(1)[0]
    const hasOneAce = card_1.name === specialCards.Ace || card_2.name === specialCards.Ace
    const hasOneTen = card_1.value === 10 || card_2.value === 10
    let blackjack = false

    if (hasOneTen && hasOneAce) {
      blackjack = true
    }

    return {
      blackjack: blackjack,
      card_1: card_1,
      card_2: card_2
    }
  }

  turn (language) {
    const message = {
      player: [],
      dealer: []
    }

    if (this.score.player === 0) {
      this.cards = []
      const draw = this.drawTwoCards()
      if (draw.blackjack) {
        this.blackjack = true
        this.stand = true
        this.score.player = 21
      } else {
        this.score.player += draw.card_1.value + draw.card_2.value
      }
      this.cards.push(draw.card_1, draw.card_2)
      message.player = [draw.card_1.toText(language), draw.card_2.toText(language)]
    } else if (this.endGame) {
      this.cards.forEach(card => {
        message.player.push(card.toText(language))
      })
      this.dealerCards.forEach(card => {
        message.dealer.push(card.toText(language))
      })
    } else {
      const card = this.deck.getCards(1)[0]
      this.cards.push(card)
      this.cards.forEach(card => {
        message.player.push(card.toText(language))
      })
    }

    return message
  }

  makeChoice (option) {
    const deck = this.deck
    const card = deck.deck[deck.index]

    if (option === 'hit') {
      this.score.player += card.value
    } else if (option === 'stand') {
      this.stand = true
    }

    return this.checkEndGame()
  }

  checkEndGame () {
    if (this.score.player > 21) {
      this.lose = true
      this.endGame = true
    } else if (this.score.player === 21) {
      this.stand = true
    }

    if (this.stand) {
      this.endGame = true
      this.dealerCards = []
      const draw = this.drawTwoCards()

      this.dealerCards.push(draw.card_1, draw.card_2)
      this.score.dealer = draw.card_1.value + draw.card_2.value

      if (this.blackjack && draw.blackjack) {
        this.draw = true
      } else if (this.blackjack) {
        this.win = true
      } else if (draw.blackjack) {
        this.lose = true
      } else {
        while (this.dealerCards.length < 5 && this.score.dealer <= 17) {
          const card = this.deck.getCards(1)[0]
          this.dealerCards.push(card)
          this.score.dealer += card.value
        }

        if (this.score.player > this.score.dealer || this.score.dealer > 21) {
          this.win = true
        } else if (this.score.player === this.score.dealer) {
          this.draw = true
        } else if (this.score.player < this.score.dealer) {
          this.lose = true
        }
      }
    }
  }
}

export default BlackjackGame
