import Player from '../models/player'

class PlayerSession {
  constructor (language) {
    this.id = '' + Math.ceil(Math.random() * 100)
    this.language = language
  }

  /**
   * @param {string} name
   */
  set name (name) {
    this.player = new Player(name)
  }
}

export default PlayerSession
