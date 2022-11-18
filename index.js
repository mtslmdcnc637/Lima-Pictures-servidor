const express = require("express");
const res = require("express/lib/response");
const mongoose = require("mongoose");
const cors = require('cors');
const routerService = require("./routes/serviceRoutes.js");

const app = express();
const bodyparser = require("body-parser")
app.use(express.json());
app.use((req, res, next) =>{
  res.header("Access-Control-Allow-Origin", "*")
  app.use(cors());
  next();
})

const PORT = process.env.PORT || 3000
app.use(bodyparser.urlencoded({extended: false}))
app.use(bodyparser.json())

//carrega a pagina de dashboard
app.set('view engine', 'ejs');
app.get("/", (req, res) => {
  res.render("dashboard");
});


//cria a pagona de formulario
app.get('/new-service', function(req,res){
  res.render("cadService")
})


//cria a pagina de cadastro de imagem
app.get('/new-image', function(req,res){
res.render("createImage")
})

//cria a pagina de cadastro de video
app.get('/new-video', function(req,res){
res.render("createVideo")
})

//cria a pagina de cadastro de audio
app.get('/new-audio', function(req,res){
res.render("createAudio")
})

// adiciona o post da rota de serviços que esta na pasta de rotas -------------------------------------------------
const serviceRoutes = require("./routes/serviceRoutes.js");
app.use("/service", serviceRoutes);
// termino da adição do post para serviços------------------------------------------------------------------------


// adiciona o post da rota de Imagens que esta na pasta de rotas -------------------------------------------------
const imageRoutes = require("./routes/imageRoutes.js");
app.use("/image", imageRoutes);
// termino da adição do post para imagens------------------------------------------------------------------------

// adiciona o post da rota de videos que esta na pasta de rotas -------------------------------------------------
const videoRoutes = require("./routes/videoRoutes.js");
app.use("/video", videoRoutes);
// termino da adição do post para videos------------------------------------------------------------------------

// adiciona o post da rota de audios que esta na pasta de rotas -------------------------------------------------
const audioRoutes = require("./routes/audioRoutes.js");
app.use("/audio", audioRoutes);
// termino da adição do post para audios------------------------------------------------------------------------

const DB_USER = "SitePortfolio";
const DB_PASS = encodeURIComponent("TlXQ7bGyg1GcrvbC");

app.use(
  express.urlencoded({
    extended: true,
  })
);


mongoose
  .connect(
    `mongodb+srv://${DB_USER}:${DB_PASS}@limapicturesportfolio.kxphqx3.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => {
    app.listen(PORT);
    console.log("conectado");
  })
  .catch();
