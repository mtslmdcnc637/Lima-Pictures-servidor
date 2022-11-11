const router = require("express").Router();
const TextHero = require("../models/TextHero");

// cadastro de servicos - começo
router.post("/", async (req, res) => {
  const { text } = req.body;

  if (!text) {
    res.status(422).json({ error: "Todos os campos são obeigatórios" });
    return;
  }

  const textReceived = { text };

  try {
    await TextHero.create(textReceived);
    res.status(201).json({ message: "Texto adicionado com sucesso" });
  } catch (error) {
    res.status(500).json({ error: error });
  }
});
// termino  - cadastro serviços

router.get("/", async (req, res) => {
  try {
    const texts = await TextHero.find();
    res.status(200).json(texts);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

module.exports = router;
