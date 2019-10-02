import * as http from 'http'
import express = require('express')
import { RouterTareas } from './routes'
import { Request } from 'express'
import * as bodyParser from 'body-parser'

let httpServer: http.Server
let app = express()

interface RequestApp extends Request {
  estaAutenticado: boolean
}

const inicializar = (): Promise<any> => {
  return new Promise((resolve, reject) => {
    httpServer = http.createServer(app)

    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: false }))

    app.use((req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*')
      res.header('Access-Control-Allow-Origin', '*')
      res.header('Access-Control-Allow-Methods', '*')
      res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
      )
      next()
    })

    app.use('/tareas', (req: RequestApp, res, next) => {
      req.estaAutenticado = true
      /**
       * Logica de autenticacion
       */
      next()
    })

    /* app.use('/tareas', (req, res) => {
      res.json({
        status: 409,
        message: 'Acceso restringido'
      })
    }) */

    app.use('/tareas', RouterTareas)

    httpServer
      .listen(3000)
      .on('listening', () => resolve())
      .on('error', () => reject())
  })
}

const iniciar = async () => {
  try {
    console.log('Iniciando servidor ...')
    await inicializar()
    console.log('Servidor ejecutándose!')
  } catch (error) {
    console.log(error)
  }
}

iniciar()
