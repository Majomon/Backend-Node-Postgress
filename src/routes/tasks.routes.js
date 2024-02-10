import { Router } from "express";
import { createTasks, getTasks } from "../controllers/tasks.controller.js";
const router = Router();

/* Todos las tareas */
router.get("/tasks", getTasks);

/* Crear tarea */
router.post("/tasks", createTasks);

/* Modificar tarea */
router.put("/tasks/:id");

/* Eliminar una tarea */
router.delete("/tasks/:id");

/* Pedir una tarea por ID */
router.get("/tasks/:id");

export default router;
