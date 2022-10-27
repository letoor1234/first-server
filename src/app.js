const path = require("path");
// Requerimos dotenv para acceder a nuestro .env
require("dotenv").config();

// Requerimos express para utilizarlo
const express = require("express");

// Inicializamos nuestra aplicación express
const app = express();

// Nuestra primer ruta
app.get("/home", (req, res) => {
  // json
  // res.json({key: value})
  // plain text
  // res.send("asd")
  // HTTP status
  // res.status(200).send()
  // files
  res.status(200).sendFile(path.join(__dirname, "views/home.html"));
});

// Nueva ruta que recibe una query
app.get("/suma", (req, res) => {
  // Datos a atravez de query 
  // http://localhost:8000/suma?param1=2&param2=14
  const { param1, param2 } = req.query;

  if (!param1 || !param2) {
    return res.status(500).send("Faltan los parámetros");
  }

  return res
    .status(200)
    .send(`Resultado = ${parseInt(param1) + parseInt(param2)}`);
});

// Comenzamos a escuchar con nuestro servidor
app.listen(process.env.PORT, () => {
  console.log("Server listening on Port: ", process.env.PORT);
});
