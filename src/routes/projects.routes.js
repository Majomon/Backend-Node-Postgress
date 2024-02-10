import { Router } from "express";
import {
  createProject,
  getProjects,
  deleteProject,
  updateProject,
} from "../controllers/projects.Controller.js";
const router = Router();

/* Todos los proyectos */
router.get("/projects", getProjects);

/* Crear un proyecto */
router.post("/projects", createProject);

/* Modificar un proyecto */
router.put("/projects/:id", updateProject);

/* Eliminar un proyecto */
router.delete("/projects/:id", deleteProject);

/* Pedir un solo proyecto */
router.get("/projects/:id");

export default router;
