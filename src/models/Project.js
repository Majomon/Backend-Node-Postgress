import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Task } from "./Task.js";

export const Project = sequelize.define(
  "Proyect",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    priority: {
      type: DataTypes.INTEGER,
    },
    description: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: true,
  }
);

/* Creando la relación */
/* De uno a muchos */
Project.hasMany(Task, {
  foreignkey: "projectId",
  sourceKey: "id",
});

Task.belongsTo(Project, {
  foreignkey: "projectId",
  targetId: "id",
});
