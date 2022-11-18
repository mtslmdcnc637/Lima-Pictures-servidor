const routerAudio = require('express').Router();
const Audio = require('../models/Audio');

//determina que se a requisição for post cadastra o audio - começo
routerAudio.post('/', async (req, res) => {
    const { link } = req.body;
    if (!link) {
        res.status(422).json({ error: 'Todos os campos são obrigatórios' });
        return;
    }
    
    const audio = { link };
    
    try {
        await Audio.create(audio);
        res.status(201).json({ message: 'Audio enviado com sucesso' });
    } catch (error) {
        res.status(500).json({ error: error });
    }
});
// termino  - cadastro de audios

//se a requisição for get ele procura todos os audios e envia
routerAudio.get('/', async (req, res) => {
    try {
        const audios = await Audio.find();
        res.status(200).json(audios);
    } catch (error) {
        res.status(500).json({ error: error });
    }
});
// fim da get ---------------------------
module.exports = routerAudio;