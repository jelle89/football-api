const { Router } = require('express')
const Player = require('./model')
const Team = require('../team/model')

const router = new Router()

router.get(
  '/player',
  (request, response, next) => Player
    .findAll()
    .then(players => response.send(players))
    .catch(error => next(error))
)

router.get('/player/:id', function (request, response, next) {
    const id = (request.params.id)
    Player
    .findByPk(id, {include: [Team]})
    .then(players => response.send(players))
    .catch(error => next(error))
  })
  

router.post(
    '/player',
    (request, response, next) => Player
    .create(request.body)
    .then(players => response.json(players))
    .catch(error => next(error))
)

router.put('/player/:id', function (request, response) {
    const id = request.params.id

    Player
    .findByPk(id)
    .then(players => players.update(request.body))
    .then(players => response.send(players))
    .catch(error => next(error))
  })

module.exports = router