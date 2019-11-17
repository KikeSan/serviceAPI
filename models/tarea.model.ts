const mongoose = require('mongoose');

const esquema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    size: 255
  },
  description: String,
  status: String,
  fecha: String
});

const modelo = mongoose.model('Tarea', esquema);

export default modelo;
