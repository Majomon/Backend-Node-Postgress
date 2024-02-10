import { Task } from "../models/Task.js";

export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.findAll();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createTasks = async (req, res) => {
  const { name, done, ProjectId } = req.body;

  try {
    const newTasks = await Task.create({
      name,
      done,
      ProjectId,
    });

    res.json(newTasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
