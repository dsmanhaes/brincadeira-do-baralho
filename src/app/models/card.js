class Card {
  constructor (value, name, naipe) {
    this.value = value
    this.name = name
    this.naipe = naipe
  }

  toText (language) {
    let semantic = ''

    if (typeof (this.name) === 'number') {
      semantic = `${this.name} ${language.of} ${language.naipes[this.naipe]}`
    } else if (isNaN(this.value)) {
      semantic = `${language.jokerCards[this.name]}`
    } else {
      semantic = `${language.specialCards[this.name]} ${language.of} ${language.naipes[this.naipe]}`
    }

    return semantic
  }
}

export default Card
