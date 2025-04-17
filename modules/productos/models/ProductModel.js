const db = require("../../../db/database"); // Subir dos niveles para llegar a 'db'

class ProductModel {
  async getAll(product) {
    return new Promise((resolve, reject) => {
      const query = "SELECT * FROM products";

      db.getDb().all(query, [], function (err, products) {
        if (err) {
          console.error("Error al ejecutar consulta SQL:", err); // Imprime el error en caso de que falle
          reject(err);
        } else {
          resolve(products);
        }
      });
    });
  }

  async createProduct(product) {
    return new Promise((resolve, reject) => {
      const { name, price } = product;
      const query = "INSERT INTO products (name, price) VALUES (?, ?)";

      db.getDb().run(query, [name, price], function (err) {
        if (err) {
          reject(err);
        } else {
          resolve(this.lastID);
        }
      });
    });
  }

  async deleteProduct(id) {
    return new Promise((resolve, reject) => {
      const query = "DELETE FROM products WHERE id = ?";

      db.getDb().run(query, [id], function (err) {
        if (err) {
          reject(err);
        } else {
          resolve(this.lastID);
        }
      });
    });
  }
}
module.exports = new ProductModel();
