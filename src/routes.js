import { Router } from 'express'
import PlayerSession from './app/controllers/playerSession'
import GameChooser from './app/controllers/gameChooser'
import languages from './database/languageList'

const routes = new Router()
const baseUrl = 'http://127.0.0.1:3000/'
const sessions = new Map()
const json = {}

/**
 * Administra as informações que são enviadas em resposta as requisiç~eos
 * @param {Object} fields
 */
function generateJson (fields) {
  for (const key in fields) {
    json[key] = fields[key]
  }
  return json
}

/**
 * Midleware que carrega a sessão do usuário
 */
function getSession (request, response, next) {
  const { sessionId } = request.params
  request.session = sessions.get(sessionId)

  return next()
}

/**
 * Acesso inicial do usuário
 */
routes.get('/', (request, response) => {
  response.json(generateJson({ message: 'Choose your language' }))
})

/**
 * Criação da sessão do usuário
 */
routes.post('/', (request, response) => {
  const { language } = request.body
  const session = new PlayerSession(languages[language])
  sessions.set(session.id, session)

  response.redirect(baseUrl + session.id)
})

/**
 * Escolha do nome do usuário
 */
routes.get('/:sessionId', getSession, (request, response) => {
  const session = request.session

  return response.json(generateJson({
    message: session.language.messages.insertUserName
  }))
})

/**
 * Área para escolha do jogo
 */
routes.post('/:sessionId', getSession, (request, response) => {
  const session = request.session
  session.name = request.body.name

  return response.json(generateJson({
    name: session.player.name,
    message: session.language.messages.chooseGame
  }))
})

/**
 * Área para escolha da dificuldade
 */
routes.get('/:sessionId/:gameName', getSession, (request, response) => {
  const session = request.session
  const { gameName } = request.params
  session.game = new GameChooser(gameName)
  const game = session.game.game

  if (game.difficulty) {
    return response.json(generateJson({
      gameName: game.name,
      message: session.language.messages.chooseDifficulty
    }))
  } else {
    session.isPlaying = true
    return response.json(generateJson({
      message: game.mainMessage(session.language),
      card: game.turn(session.language),
      score: game.score
    }))
  }
})

/**
 * Área onde o jogo acontece
 */
routes.post('/:sessionId/:gameName', getSession, (request, response) => {
  const session = request.session
  const { choose, difficulty } = request.body
  const game = session.game.game
  let result

  if (session.isPlaying) {
    if (choose) {
      result = session.language.messages[game.makeChoice(choose)]
      checkEndGame(game, result, session)
      generateJson({ card: game.turn(session.language) })
    }
  } else {
    if (difficulty) {
      session.difficulty = difficulty
      session.game.selectDifficulty(difficulty)
      session.isPlaying = true
      generateJson({
        difficulty: session.difficulty,
        message: game.mainMessage(session.language),
        card: game.turn(session.language)
      })
    } else {
      return response.json(json)
    }
  }
  return response.json(generateJson({
    result: result,
    score: game.score
  }))
})

/**
 * Verifica e conlui o jogo
 */
function checkEndGame (game, result, session) {
  if (game.endGame) {
    session.isPlaying = false
    generateJson({
      result: result,
      score: game.score,
      index: game.deck.index
    })
    if (game.win) {
      generateJson({ message: session.language.messages.win })
    } else if (game.lose) {
      generateJson({ message: session.language.messages.lose })
    }
  }
}

export default routes
