let tareas = [
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
]
class GenericoController {
  constructor(private modelo: any) {
    this.listar = this.listar.bind(this)
    this.obtenerUno = this.obtenerUno.bind(this)
    this.insertar = this.insertar.bind(this)
    this.actualizar = this.actualizar.bind(this)
    this.eliminar = this.eliminar.bind(this)
  }

  listar(req, res) {
    /* res.type("application/json").send({
      name: "Fullstack",
      ruta: req.url,
      modelo: this.modelo
    }) */
    //console.log(tareas)
    res.send(tareas)
  }

  obtenerUno(req, res) {
    console.log(req.params)
    /* res.type('application/json').send({
      name: 'Fullstack Detalle',
      ruta: req.url
    }) */
    let result
    tareas.forEach((element, index) => {
      if (element.id == req.params.id) {
        result = tareas[index]
      }
    })
    res.send(result)
  }

  insertar(req, res) {
    /* res.status(201).json({
      status: 201,
      message: 'Usuario insertado'
    }) */
    tareas.push({
      id: req.query.id,
      title: req.query.title,
      description: req.query.description,
      status: req.query.status,
      fecha: req.query.fecha
    })
    res.send(tareas)
  }

  actualizar(req, res) {
    /* res.status(201).json({
      status: 201,
      message: 'Usuario actualizado'
    }) */
    for (let i = 0; i < tareas.length; i++) {
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
    res.send(tareas)
  }

  eliminar(req, res) {
    /* res.status(201).json({
      status: 201,
      message: 'Usuario eliminado'
    }) */
    for (var i = 0; i < tareas.length; i++) {
      if (tareas[i].id === req.params.id) {
        tareas.splice(i, 1)
      }
    }
    res.send(tareas)
  }
}

export default GenericoController
