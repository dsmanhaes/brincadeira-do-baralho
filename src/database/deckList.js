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
      {
        card: specialCards.Jack,
        value: 11
      },
      {
        card: specialCards.Queen,
        value: 12
      },
      {
        card: specialCards.King,
        value: 13
      },
      {
        card: specialCards.Ace,
        value: 14
      }
    ],
    jokers: [
      jokers.Colorfull,
      jokers.BlackWhite
    ]
  },
  Blackjack: {
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
      {
        card: specialCards.Jack,
        value: 10
      },
      {
        card: specialCards.Queen,
        value: 10
      },
      {
        card: specialCards.King,
        value: 10
      },
      {
        card: specialCards.Ace,
        value: 1
      }
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
      {
        card: specialCards.Jack,
        value: 6.25
      },
      {
        card: specialCards.Queen,
        value: 6.5
      },
      {
        card: specialCards.King,
        value: 6.75
      },
      {
        card: specialCards.Ace,
        value: 8
      }
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
        {
          card: specialCards.Jack,
          value: 0.5
        },
        {
          card: specialCards.Queen,
          value: 0.5
        },
        {
          card: specialCards.King,
          value: 0.5
        },
        {
          card: specialCards.Ace,
          value: 0.5
        }
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
        {
          card: specialCards.Jack,
          value: 0.5
        },
        {
          card: specialCards.Queen,
          value: 0.5
        },
        {
          card: specialCards.King,
          value: 0.5
        },
        {
          card: specialCards.Ace,
          value: 0.5
        }
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
        {
          card: specialCards.Jack,
          value: 0.5
        },
        {
          card: specialCards.Queen,
          value: 0.5
        },
        {
          card: specialCards.King,
          value: 0.5
        },
        {
          card: specialCards.Ace,
          value: 0.5
        }
      ],
      jokers: []
    }
  }
}

export { naipes, specialCards, jokers, deckTypes }
