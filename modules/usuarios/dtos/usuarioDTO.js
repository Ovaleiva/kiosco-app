// dtos/usuarioDTO.js
class UsuarioDTO {
  constructor(nombre, email, password, rol) {
    this.nombre = nombre;
    this.email = email;
    this.password = password;
    this.rol = rol;
  }
}

module.exports = UsuarioDTO;
