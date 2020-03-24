const naipes = {
  Hearts: 'hearts',
  Diamonds: 'diamonds',
  Clubs: 'clubs',
  Spades: 'spades'
}

const specialCards = {
  Ace: 'ace',
  King: 'king',
  Queen: 'queen',
  Jack: 'jack'
}

const jokers = {
  Colorfull: 'colorfullJoker',
  BlackWhite: 'blackWhiteJoker'
}

const deckTypes = {
  Test: {
    decks: 1,
    naipes: [
      naipes.Spades
    ],
    numbers: {
      from: 2,
      to: 3
    },
    specialCards: [
    ],
    jokers: [
    ]
  },
  Full: {
    decks: 1,
    naipes: [
      naipes.Hearts,
      naipes.Diamonds,
      naipes.Clubs,
      naipes.Spades
    ],
    numbers: {
      from: 2,
      to: 10
    },
    specialCards: [
      specialCards.Jack,
      specialCards.Queen,
      specialCards.King,
      specialCards.Ace
    ],
    jokers: [
      jokers.Colorfull,
      jokers.BlackWhite
    ]
  },
  Common: {
    decks: 1,
    naipes: [
      naipes.Hearts,
      naipes.Diamonds,
      naipes.Clubs,
      naipes.Spades
    ],
    numbers: {
      from: 2,
      to: 10
    },
    specialCards: [
      specialCards.Jack,
      specialCards.Queen,
      specialCards.King,
      specialCards.Ace
    ],
    jokers: []
  },
  Sueca: {
    decks: 1,
    naipes: [
      naipes.Hearts,
      naipes.Diamonds,
      naipes.Clubs,
      naipes.Spades
    ],
    numbers: {
      from: 2,
      to: 7
    },
    specialCards: [
      specialCards.Jack,
      specialCards.Queen,
      specialCards.King,
      specialCards.Ace
    ],
    jokers: []
  },
  Spider: {
    Easy: {
      decks: 8,
      naipes: [
        naipes.Spades
      ],
      numbers: {
        from: 2,
        to: 10
      },
      specialCards: [
        specialCards.Jack,
        specialCards.Queen,
        specialCards.King,
        specialCards.Ace
      ],
      jokers: []
    },
    Medium: {
      decks: 4,
      naipes: [
        naipes.Hearts,
        naipes.Spades
      ],
      numbers: {
        from: 2,
        to: 10
      },
      specialCards: [
        specialCards.Jack,
        specialCards.Queen,
        specialCards.King,
        specialCards.Ace
      ],
      jokers: []
    },
    Hard: {
      decks: 2,
      naipes: [
        naipes.Hearts,
        naipes.Diamonds,
        naipes.Clubs,
        naipes.Spades
      ],
      numbers: {
        from: 2,
        to: 10
      },
      specialCards: [
        specialCards.Jack,
        specialCards.Queen,
        specialCards.King,
        specialCards.Ace
      ],
      jokers: []
    }
  }
}

export { naipes, specialCards, jokers, deckTypes }
