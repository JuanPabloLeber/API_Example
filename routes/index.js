const router = require('express').Router()

const alumnoRouter = require('./alumnoRouter')

router.use('/alumnos', alumnoRouter)

module.exports = router