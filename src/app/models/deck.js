import Card from './card'
import { shuffleArray } from '../../utils/arrayUtils'

class Deck {
  constructor (type) {
    const deck = []
    const numbers = type.numbers

    for (let deckNumber = 1; deckNumber <= type.decks; deckNumber++) {
      type.naipes.forEach(naipe => {
        for (let number = numbers.from; number <= numbers.to; number++) {
          deck.push(new Card(number, number, naipe))
        }
        type.specialCards.forEach((specialCard, index) => {
          deck.push(new Card(numbers.to + index + 1, specialCard, naipe))
        })
      })
      type.jokers.forEach(joker => {
        deck.push(new Card(NaN, joker, joker))
      })
    }

    this.index = 0
    this.deck = shuffleArray(deck)
  }

  getCards (quantity) {
    const cards = []

    for (let index = 0; index < quantity; index++) {
      cards.push(this.deck[this.index + index])
    }
    this.index += quantity

    return cards
  }
}

export default Deck
