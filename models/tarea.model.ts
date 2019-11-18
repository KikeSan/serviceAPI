const mongoose = require('mongoose')

const esquema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    size: 255
  },
  description: String,
  status: String,
  fecha: String
})

function autoPoblar(next) {
  this.populate('roles')
  next()
}

esquema.pre('find', autoPoblar)
esquema.pre('findOne', autoPoblar)

const modelo = mongoose.model('Tarea', esquema)

export default modelo
