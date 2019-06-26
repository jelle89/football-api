const { Router } = require('express')
const Team = require('./model')

const router = new Router()

router.get(
  '/team',
  (request, response, next) => Team
    .findAll()
    .then(teams => response.send(teams))
    .catch(error => next(error))
)

router.get('/team/:id', function (request, response, next) {
    const id = request.params.id
    Team.findByPk().then(teams => {
      response.json({ message: `Read team ${id}` })
    })
  })

router.post(
    '/team',
    (request, response, next) => Team
    .create(request.body)
    .then(teams => response.json(teams))
    .catch(error => next(error))
)

router.put('/team/:id', function (request, response) {
    const id = request.params.id

    Team
    .findByPk(id)
    .then(teams => teams.update(request.body))
    .then(teams => response.send(teams))
    .catch(error => next(error))
  })

module.exports = router