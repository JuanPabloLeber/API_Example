const mongoose = require('mongoose')

const alumnoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String
    },
    age: {
        type: Number
    },
    email: {
        type: String,
        unique: true
    }
})

const AlumnoModel = mongoose.model('alumno', alumnoSchema)

module.exports = AlumnoModel