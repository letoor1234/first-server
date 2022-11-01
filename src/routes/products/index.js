const path = require("path");
const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  return res
    .status(200)
    .sendFile(path.join(__dirname, "../../views/html/products/list.html"));
});

router.get("/1", (req, res) => {
  return res
    .status(200)
    .sendFile(path.join(__dirname, "../../views/html/products/details.html"));
});

module.exports = router;
