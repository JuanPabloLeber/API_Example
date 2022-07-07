const AlumnoModel = require('../models/alumnoModel')

async function createAlumno(req, res) {
    try {
        const alumno = await AlumnoModel.create(req.body)
        res.json(alumno)
    } catch (error) {
        console.log(error)
    }
}

async function showAlumnos(req, res) {
    try {
      const alumnos = await AlumnoModel.find()
      res.json(alumnos) 
    } catch (error) {
        console.log(error)
    }
}

async function deleteAlumno(req, res) {
    try {
      const deletedAlumno = await AlumnoModel.findByIdAndDelete(req.params.id)
      res.json(deletedAlumno)  
    } catch (error) {
        console.log(error)
    }
}

async function updateAlumno(req, res) {
    try {
      const alumno = await AlumnoModel.findByIdAndUpdate(req.params.id, req.body ,{new: true})
      res.json(alumno)  
    } catch (error) {
        console.log(error)
    }
}



module.exports = {
    createAlumno,
    showAlumnos,
    deleteAlumno,
    updateAlumno
}

