import GenericoController from "./generico.controller"
import { Tarea } from "../models"

class Controller extends GenericoController {
  constructor() {
    super(Tarea) //Aquí estaba mi error! --> super('tareas')
  }
}

export default Controller
