const router = require('express').Router()

const {
    createAlumno,
    showAlumnos,
    deleteAlumno,
    updateAlumno
} = require('../controllers/alumnoController')

router
    .get('/', showAlumnos)
    .post('/', createAlumno)
    .put('/:id', updateAlumno)
    .delete('/:id', deleteAlumno)

module.exports = router