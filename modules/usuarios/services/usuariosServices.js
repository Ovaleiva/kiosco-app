const db = require("../../../db/Database").getDb();

function registrarUsuario(nombre, email, contraseña, callback) {
  const query = `INSERT INTO usuarios (nombre, email, contraseña) VALUES (?, ?, ?)`;
  db.run(query, [nombre, email, contraseña], function (err) {
    if (err) return callback(err);
    callback(null, this.lastID);
  });
}

function loginUsuario(email, contraseña, callback) {
  const query = `SELECT * FROM usuarios WHERE email = ? AND contraseña = ?`;
  db.get(query, [email, contraseña], (err, row) => {
    if (err) return callback(err);
    if (!row) return callback(new Error("Credenciales inválidas"));
    callback(null, row);
  });
}

module.exports = {
  registrarUsuario,
  loginUsuario,
};
