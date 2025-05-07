const usuariosService = require("../services/usuariosService");

const loginUsuario = (req, res) => {
  const { email, contraseña } = req.body;

  usuariosService.loginUsuario(email, contraseña, (err, usuario) => {
    if (err) {
      return res.status(401).json({ error: err.message });
    }

    // Guardar los datos del usuario en la sesión
    req.session.usuario = usuario;

    // Redirigir al perfil del usuario
    res.redirect("/profile");
  });
};

const perfilUsuario = (req, res) => {
  // Verificar si hay un usuario en la sesión
  const usuario = req.session.usuario;

  if (!usuario) {
    return res.redirect("/login"); // Si no hay usuario, redirigir a login
  }

  // Renderizar la vista del perfil y pasar los datos del usuario
  res.render("usuarios/profile", { usuario });
};

module.exports = {
  loginUsuario,
  perfilUsuario,
};
