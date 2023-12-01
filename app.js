const express = require("express");
const app = express();
const path = require("path");

const mainRoutes = require("./src/routes/main.routes");
const shopRoutes = require("./src/routes/shop.routes");
const adminRoutes = require("./src/routes/admin.routes");
const authRoutes = require("./src/routes/auth.routes");
const { METHODS } = require("http");

const PORT = 4004;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./src/views"));

app.use(express.static("public_html"));


app.use(express.urlencoded());
app.use(express.json());
app.use(methodOveride("_method "));

app.use("/", mainRoutes, shopRoutes, adminRoutes, authRoutes);

app.listen(PORT, () =>
  console.log(`iniciando servidor en puerto http://localhost:${PORT}`)
);
