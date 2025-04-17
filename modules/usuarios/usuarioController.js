const usuarioService = require("../productos/services/usuarioService");

exports.crearUsuario = async (req, res) => {
  try {
    await usuarioService.crearUsuario(req.body);
    res.redirect("/usuarios");
  } catch (error) {
    res.status(500).send("Error al crear usuario");
  }
};

exports.listarUsuarios = async (req, res) => {
  try {
    const usuarios = await usuarioService.listarUsuarios();
    res.render("usuarios", { usuarios }); // asume que tenés usuarios.hbs
  } catch (error) {
    res.status(500).send("Error al obtener usuarios");
  }
};
