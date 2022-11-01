const path = require("path");
const express = require("express");

const router = express.Router();

// Nuestra primer ruta
router.get("/", (req, res) => {
  // files
  res.status(200).sendFile(path.join(__dirname, "../../views/html/home.html"));
});

module.exports = router;
