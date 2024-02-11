import { Project } from "../models/Project.js";
import { Task } from "../models/Task.js";

export const getProjects = async (req, res) => {
  try {
    const projects = await Project.findAll();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getProjectId = async (req, res) => {
  const { id } = req.params;
  try {
    const projectId = await Project.findOne({
      where: {
        id,
      },
    });
    /* Si no pongo el return en este caso se cae el servidor al no encontrar resultado */
    if (!projectId)
      return res.status(404).json({ message: "Project not found." });
    res.json(projectId);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createProject = async (req, res) => {
  const { name, priority, description } = req.body;

  try {
    const newProject = await Project.create({
      name,
      priority,
      description,
    });

    res.json(newProject);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteProject = async (req, res) => {
  const { id } = req.params;
  try {
    await Project.destroy({
      where: {
        id,
      },
    });
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateProject = async (req, res) => {
  const { id } = req.params;
  const { name, priority, description } = req.body;
  try {
    const project = await Project.findByPk(id);
    project.name = name;
    project.priority = priority;
    project.description = description;
    // Guardar los cambios
    await project.save();
    res.json(project);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getProjectTasks = async (req, res) => {
  const { id } = req.params;
  try {
    const task = await Task.findAll({
      where: {
        ProjectId: id,
      },
    });

    return res.json(task)
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
