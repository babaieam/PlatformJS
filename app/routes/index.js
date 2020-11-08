const express = require('express')
const router = express.Router()

router.use('/', (req, res, next) => {
  res.status(200).send({ message: 'ok' })
})

// Handle Errors
router.all('*', errorHandler.error404)
router.use(errorHandler.handler)

module.exports = router
