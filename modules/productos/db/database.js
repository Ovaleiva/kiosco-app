const sqlite3 = require("sqlite3").verbose();
const path = require("path");

class Database {
  constructor() {
    const dbPath = path.join(__dirname, "..", "db", "monolito.db");

    console.log("Ruta absoluta del DB:", dbPath);

    this.db = new sqlite3.Database(dbPath, (err) => {
      if (err) {
        console.error("Error al conectar con SQLite:", err.message);
      } else {
        console.log("Conectado a SQLite");
      }
    });
  }

  getDb() {
    return this.db;
  }
}

module.exports = new Database();
