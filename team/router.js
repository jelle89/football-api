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

router.post(
    '/team',
    (request, response, next) => Team
    .create(request.body)
    .then(teams => response.json(teams))
    .catch(error => next(error))
)

module.exports = router