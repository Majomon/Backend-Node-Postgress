import { Router } from "express";
import {
  createTasks,
  deleteTask,
  getTaskId,
  getTasks,
  updateTask,
} from "../controllers/tasks.controller.js";
const router = Router();

/* Todos las tareas */
router.get("/tasks", getTasks);

/* Crear tarea */
router.post("/tasks", createTasks);

/* Modificar tarea */
router.put("/tasks/:id", updateTask);

/* Eliminar una tarea */
router.delete("/tasks/:id", deleteTask);

/* Pedir una tarea por ID */
router.get("/tasks/:id", getTaskId);

export default router;
