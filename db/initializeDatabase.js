const path = require("path");
const db = require("./Database").getDb();

function createTables() {
  db.serialize(() => {
    // Tabla productos
    db.run(
      `
      CREATE TABLE IF NOT EXISTS products (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        price REAL NOT NULL
      )
    `,
      (err) => {
        if (err) {
          console.error("Error al crear la tabla productos:", err.message);
        } else {
          console.log("Tabla productos creada o ya existe.");
        }
      }
    );

    // Tabla usuarios
    db.run(
      `
      CREATE TABLE IF NOT EXISTS usuarios (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nombre TEXT NOT NULL,
        email TEXT UNIQUE NOT NULL,
        contraseña TEXT NOT NULL
      )
    `,
      (err) => {
        if (err) {
          console.error("Error al crear la tabla usuarios:", err.message);
        } else {
          console.log("Tabla usuarios creada o ya existe.");
        }
      }
    );

    // Tabla ventas
    db.run(
      `
      CREATE TABLE IF NOT EXISTS ventas (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        producto_id INTEGER NOT NULL,
        usuario_id INTEGER NOT NULL,
        cantidad INTEGER NOT NULL,
        fecha TEXT NOT NULL,
        FOREIGN KEY (producto_id) REFERENCES products(id),
        FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
      )
    `,
      (err) => {
        if (err) {
          console.error("Error al crear la tabla ventas:", err.message);
        } else {
          console.log("Tabla ventas creada o ya existe.");
        }
      }
    );
  });
}

module.exports = { createTables };
