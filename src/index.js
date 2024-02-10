/* Para poder usar import y export debo crear en el package "type": "module" */
import app from "./app.js";
import { sequelize } from "./database/database.js";

async function main() {
  try {
    await sequelize.authenticate();
    console.log("Conexión establecida");
    app.listen(3000, () => {
      console.log("Server is listening on port", 3000);
    });
  } catch (error) {
    console.log("Error al querer conectar con la base de datos");
  }
}

main();
