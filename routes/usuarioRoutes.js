// routes/usuarioRoutes.js
const express = require("express");
const router = express.Router();

// Ruta ejemplo
router.get("/usuarios", (req, res) => {
  res.send("Lista de usuarios");
});

module.exports = router;
