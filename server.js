const express = require("express");
const { engine } = require("express-handlebars");
const path = require("path");

// Esto te va a mostrar la ruta completa donde está buscando el archivo
console.log(
  "Ruta completa:",
  path.join(__dirname, "modules/productos/productos/routes/products.js")
);

const { createTables } = require("./db/initializeDatabase"); // Importar la función de inicialización

const app = express();
const PORT = process.env.PORT || 8000;

// Ejecutar la inicialización de la base de datos
createTables();

// Configuración de Handlebars
app.engine(
  "hbs",
  engine({
    extname: ".hbs",
    defaultLayout: "mainLayout",
    helpers: {
      json: (context) => JSON.stringify(context, null, 2),
    },
  })
);

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

// Archivos estáticos y formularios
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

// Rutas
const productosRouter = require("./modules/productos/routes/products");
app.use("/products", productosRouter);

const usuarioRoutes = require("./routes/usuarioRoutes");
app.use("/", usuarioRoutes);

// Ruta raíz
app.get("/", (req, res) => {
  res.render("index", { title: "Monolito con Node.js y Handlebars" });
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
