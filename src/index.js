/* Para poder usar import y export debo crear en el package "type": "module" */
import app from "./app.js";
import { sequelize } from "./database/database.js";
/* import "./models/Project.js";
import "./models/Task.js"; */

async function main() {
  try {
    /* Para probar si funciona la bdd */
    /*     await sequelize.authenticate(); */
    await sequelize.sync({ force: false });
    console.log("Conexión establecida");
    app.listen(3000, () => {
      console.log("Server is listening on port", 3000);
    });
  } catch (error) {
    console.log("Error al querer conectar con la base de datos");
  }
}

main();
