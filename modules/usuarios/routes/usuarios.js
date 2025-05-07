// routes/usuarioRoutes.js
const express = require("express");
const router = express.Router();
const usuariosController = require("../controllers/usuariosController");

// Ruta para mostrar el formulario de login
router.get("/login", (req, res) => {
  res.render("login"); // Asegúrate de que tienes login.hbs en views
});

// Ruta para mostrar el formulario de registro
router.get("/register", (req, res) => {
  res.render("register"); // Asegúrate de que tienes register.hbs en views
});

// Ruta para manejar el POST de registro
router.post("/register", usuariosController.registrarUsuario);

// Ruta para manejar el POST de login
router.post("/login", usuariosController.loginUsuario);

module.exports = router;
