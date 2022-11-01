// Requerimos dotenv para acceder a nuestro .env
require("dotenv").config();

// Requerimos express para utilizarlo
const express = require("express");

// Inicializamos nuestra aplicación express
const app = express();

// Configurar nuestro app
app.use(express.static("src/views"));

// Requerimos los enrutadores
const homeRoutes = require("./routes/home");
const productRoutes = require("./routes/products");

// Utilizar nuestros enrutadores
app.use("/", homeRoutes);
app.use("/products", productRoutes);

// Comenzamos a escuchar con nuestro servidor
app.listen(process.env.PORT, () => {
  console.log("Server listening on Port: ", process.env.PORT);
});
