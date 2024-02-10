import { Project } from "../models/Project.js";

export const getProjects = async (req, res) => {
  const projects = await Project.findAll();
  res.json(projects);
};

export const createProject = async (req, res) => {
  const { name, priority, description } = req.body;
  const newProject = await Project.create({
    name,
    priority,
    description,
  });

  res.json(newProject);
};
