
const router = require("express").Router()
const Service = require("../models/Service")

// cadastro de servicos - começo
router.post('/', async (req, res) => {

    const { icon, title, text } = req.body
    if(!icon || !title || !text){
        res.status(422).json({error: "Todos os campos são obrigatórios"})
        return
    }

    const service = {icon, title, text} 
    
    try{
        await Service.create(service)
        res.status(201).json({message: "Criado com sucesso"})
}catch(error){
    res.status(500).json({error: error})
}
})
// termino  - cadastro serviços


router.get('/', async (req, res) =>{
    try {
        const services = await Service.find()
        res.status(200).json(services)
    } catch (error) {
        res.status(500).json({error: error})
    }
})

router.patch('/:id', async (req,res) => {
    const id = req.params.id
        const {icon, title, text} = req.body
        const service = {icon, title, text} 
    try {
        const updatedService = await Service.updateOne({ _id: id }, service)
        res.status(200).json({menssagem: "Feito com sucesso"})
    } catch (error) {
        res.status(500).json({error: error})
    }
})

//se a requisição for para deletar ---------------
router.get("/delete/:id", async (req, res) => {
    const id = req.params.id;
    const service = await Service.findOne({ _id: id})
    if(!service){
      res.status(422).json({error: "Serviço não encontrada"})
      return
    }
    try {
      await Service.deleteOne({ _id: id });
      res.status(200)
      res.send("<h1 style='color:red'>Removido com sucesso</h1><br><a href='/manager'>Voltar</a>' ");
    } catch (error) {
      res.status(500).json({ error: error });
    }
  });
  

module.exports = router