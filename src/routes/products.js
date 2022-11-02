const path = require("path");
const express = require("express");

const router = express.Router();

const products = [
  {
    id: 1,
    name: "Producto 1",
    description: "This is the first product",
    image:
      "https://img.remediosdigitales.com/c0f5e0/ultimo-bugatti-veyron-super-sport-en-venta-4/1366_2000.jpg",
  },
  {
    id: 2,
    name: "Producto 2",
    description: "This is the second product",
    image:
      "https://img.remediosdigitales.com/c0f5e0/ultimo-bugatti-veyron-super-sport-en-venta-4/1366_2000.jpg",
  },
  {
    id: 3,
    name: "Producto 3",
    description: "This is the third product",
    image:
      "https://img.remediosdigitales.com/c0f5e0/ultimo-bugatti-veyron-super-sport-en-venta-4/1366_2000.jpg",
  },
  {
    id: 4,
    name: "Producto 4",
    description: "This is the fourth product",
    image:
      "https://img.remediosdigitales.com/c0f5e0/ultimo-bugatti-veyron-super-sport-en-venta-4/1366_2000.jpg",
  },
];

router.get("/", (req, res) => {
  return res.status(200).render("vistas/list.ejs", {
    products,
  });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  const product = products.find((product) => product.id == id);

  return res.status(200).render("vistas/details.ejs", { product });
});

module.exports = router;
