const path = require("path");
// Requerimos dotenv para acceder a nuestro .env
require("dotenv").config();

// Requerimos express para utilizarlo
const express = require("express");

// Inicializamos nuestra aplicación express
const app = express();

// Nuestra primer ruta
app.get("/home", (req, res) => {
  res.sendFile(path.join(__dirname, "views/home.html"));
});

// Comenzamos a escuchar con nuestro servidor
app.listen(process.env.PORT, () => {
  console.log("Server listening on Port: ", process.env.PORT);
});
