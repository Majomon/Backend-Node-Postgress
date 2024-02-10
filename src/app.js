require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend con NodeJS - Express - CRUD Api Rest ");
});

app.listen(port, () =>
  console.log(`Server running on http://localhost:${port}`)
);
