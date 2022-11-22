const routerVideo = require("express").Router();
const Video = require("../models/Video");

//determina que se a requisição for post cadastra o video - começo

routerVideo.post("/", async (req, res) => {
  const { link} = req.body;
  if (!link) {
    res.status(422).json({ error: "Todos os campos são obrigatórios" });
    return;
  }

  const video = { link };

  try {
    await Video.create(video);
    res.status(201).json({ message: "Video enviado com sucesso" });
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

// termino  - cadastro de videos


//se a requisição for get ele procura todos os videos e envia
routerVideo.get("/", async (req, res) => {
  try {
    const videos = await Video.find();
    res.status(200).json(videos);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});
// fim da get ---------------------------

//se a requisição for para deletar ---------------
routerVideo.get("/delete/:id", async (req, res) => {
  const id = req.params.id;
  const video = await Video.findOne({ _id: id})
  if(!video){
    res.status(422).json({error: "video não encontrada"})
    return
  }
  try {
    await Video.deleteOne({ _id: id });
    res.status(200)
    res.send("<h1 style='color:red'>Removido com sucesso</h1><br><a href='/manager'>Voltar</a>' ");
  } catch (error) {
    res.status(500).json({ error: error });
  }
});


module.exports = routerVideo;
