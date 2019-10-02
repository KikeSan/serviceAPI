import express = require("express")
import { ControllerTarea } from "../controllers"
//import { validador, esquemasAlumnos } from "../schemasValidators"

const Router = express.Router()
const controller = new ControllerTarea()

Router.get("/", controller.listar)

/* Router.get("/detalle/:id/:nivel", validador(esquemasAlumnos.getAlumnosDetalle), controller.obtenerUno) */
Router.get("/detalle/:id", controller.obtenerUno)
Router.post("/", controller.insertar)
Router.put("/", controller.actualizar)
Router.delete("/", controller.eliminar)

export default Router