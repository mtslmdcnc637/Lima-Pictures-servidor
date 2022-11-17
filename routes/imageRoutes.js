const routerImage = require("express").Router();
const Image = require("../models/Image");

//determina que se a requisição for post cadastra image - começo

routerImage.post("/", async (req, res) => {
  const { link, title, description } = req.body;
  if (!link || !title || !description) {
    res.status(422).json({ error: "Todos os campos são obrigatórios" });
    return;
  }

  const image = { link, title, description };

  try {
    await Image.create(image);
    res.status(201).json({ message: "Imagem enviada com sucesso" });
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

// termino  - cadastro imagens


//se a requisição for get ele procura todas as imagens e envia
routerImage.get("/", async (req, res) => {
  try {
    const images = await Image.find();
    res.status(200).json(images);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});
// fim da get ---------------------------

//se a requisição for para atualização ---------------
routerImage.patch("/:id", async (req, res) => {
  const id = req.params.id;
  const { link, title, description } = req.body;
  const image = { link, title, description };
  try {
    const updatedImage = await Image.updateOne({ _id: id }, image);
    res.status(200).json({ menssagem: "Feito com sucesso" });
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

//fim da atualização

module.exports = routerImage;
