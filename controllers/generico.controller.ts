/* let tareas = [
  {
    id: '2c5ea4c0-4067-11e9-8bad-9b1deb4d3b7d',
    title: 'Tarea1',
    description: 'loremp impsum',
    status: 'todo',
    fecha: 'Fri Jun 14 2019 17:06:03 GMT-0500 (hora estándar de Perú)'
  },
  {
    id: '9125a8dc-52ee-365b-a5aa-81b0b3681cf6',
    title: 'Tarea2',
    description: 'loremp impsum',
    status: 'todo',
    fecha: 'Wed Jul 24 2019 17:06:03 GMT-0500 (hora estándar de Perú)'
  },
  {
    id: 'c6235813-3ba4-3801-ae84-e0a6ebb7d138',
    title: 'Cronograma',
    description: 'loremp impsum',
    status: 'todo',
    fecha: 'Sat Aug 31 2019 17:06:03 GMT-0500 (hora estándar de Perú)'
  },
  {
    id: 'e8b5a51d-11c8-3310-a6ab-367563f20686',
    title: 'demo 4',
    description: 'loremp impsum',
    status: 'doing',
    fecha: 'Mon Sep 2 2019 17:06:03 GMT-0500 (hora estándar de Perú)'
  },
  {
    id: '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed',
    title: 'Tarea5',
    description: 'loremp impsum',
    status: 'complete',
    fecha: 'Fri Sep 18 2019 17:06:03 GMT-0500 (hora estándar de Perú)'
  }
] */
import httpStatus = require('http-status-codes')

class GenericoController {
  constructor(private modelo: any) {
    this.listar = this.listar.bind(this)
    this.obtenerUno = this.obtenerUno.bind(this)
    this.insertar = this.insertar.bind(this)
    this.actualizar = this.actualizar.bind(this)
    this.eliminar = this.eliminar.bind(this)
  }

  async listar(req, res) {
    /* res.type("application/json").send({
      name: "Fullstack",
      ruta: req.url,
      modelo: this.modelo
    }) */
    //console.log(tareas)
    const results = await this.modelo.find()
    res.status(httpStatus.OK).json({
      status: httpStatus.OK,
      message: 'List',
      results
    })
    //res.send(tareas)
  }

  async obtenerUno(req, res) {
    const data = req.params
    const result = await this.modelo.findOne(data)

    res.status(httpStatus.OK).json({
      status: httpStatus.OK,
      message: 'Document',
      result
    })
    /* res.type('application/json').send({
      name: 'Fullstack Detalle',
      ruta: req.url
    }) */
    /* let result
    tareas.forEach((element, index) => {
      if (element.id == req.params.id) {
        result = tareas[index]
      }
    })
    res.send(result) */
  }

  async insertar(req, res) {
    const data = req.body

    const usuario = new this.modelo(data)
    await usuario.save()

    res.status(httpStatus.CREATED).json({
      status: httpStatus.CREATED,
      message: 'Document added'
    })
    /* res.status(201).json({
      status: 201,
      message: 'Usuario insertado'
    }) */
    /* tareas.push({
      id: req.query.id,
      title: req.query.title,
      description: req.query.description,
      status: req.query.status,
      fecha: req.query.fecha
    })
    res.send(tareas) */
  }

  async actualizar(req, res) {
    const params = req.params
    const body = req.body

    await this.modelo.findOneAndUpdate(params, body)

    res.status(httpStatus.CREATED).json({
      status: httpStatus.CREATED,
      message: 'Document updated'
    })

    /* res.status(201).json({
      status: 201,
      message: 'Usuario actualizado'
    }) */
    /* for (let i = 0; i < tareas.length; i++) {
      if (tareas[i].id == req.query.id) {
        tareas[i] = {
          id: req.query.id,
          title: req.query.title,
          description: req.query.description,
          status: req.query.status,
          fecha: req.query.fecha
        }
      }
    }
    res.send(tareas) */
  }

  async eliminar(req, res) {
    const params = req.params

    await this.modelo.findOneAndRemove(params)

    res.status(httpStatus.CREATED).json({
      status: httpStatus.CREATED,
      message: 'Document deleted'
    })

    /* res.status(201).json({
      status: 201,
      message: 'Usuario eliminado'
    }) */
    /* for (var i = 0; i < tareas.length; i++) {
      if (tareas[i].id === req.params.id) {
        tareas.splice(i, 1)
      }
    }
    res.send(tareas) */
  }
}

export default GenericoController
