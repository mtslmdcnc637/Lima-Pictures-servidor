const express = require("express");
const res = require("express/lib/response");
const mongoose = require("mongoose");
const router = require("./routes/serviceRoutes.js");
const app = express();
app.use(express.json());

// adiciona o post da rota de serviços que esta na pasta de rotas -------------------------------------------------

const serviceRoutes = require("./routes/serviceRoutes.js");
app.use("/service", serviceRoutes);

// termino da adição do post ------------------------------------------------------------------------




const DB_USER = "SitePortfolio";
const DB_PASS = encodeURIComponent("TlXQ7bGyg1GcrvbC");

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => {
  res.json({ message: "primeira mensagem" });
});

mongoose
  .connect(
    `mongodb+srv://${DB_USER}:${DB_PASS}@limapicturesportfolio.kxphqx3.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => {
    app.listen(3000);
    console.log("conectado");
  })
  .catch();
