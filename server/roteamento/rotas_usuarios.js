import express from "express"
import { Todos, LocUser, DeleteUser } from "../controlador/controlador_usuarios.js";

const UserRoutes = express.Router()

UserRoutes.get('/todos', Todos)
UserRoutes.get('/usuario', LocUser)
UserRoutes.delete('/delete', DeleteUser)

export { UserRoutes }