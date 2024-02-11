import { Task } from "../models/Task.js";

export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.findAll();
    return res.json(tasks);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getTaskId = async (req, res) => {
  const { id } = req.params;
  try {
    const taskId = await Task.findOne({
      where: {
        id,
      },
      /* Que campo/s quiero que retorne la consulta. En este caso solo retornaria name y su valor*/
      attributes: ["name"],
    });
    /* Si no pongo el return en este caso se cae el servidor al no encontrar resultado */
    if (!taskId) return res.status(404).json({ message: "Project not found." });
    return res.json(taskId);
  } catch (error) {
    return res.status(500).json({ message: error.message });
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

    return res.json(newTasks);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteTask = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Task.destroy({
      where: {
        id,
      },
    });
    console.log(result);
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateTask = async (req, res) => {
  const { id } = req.params;
  try {
    const task = await Task.findOne({ where: { id } });
    task.set(req.body);

    await task.save();

    return res.json(task);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
