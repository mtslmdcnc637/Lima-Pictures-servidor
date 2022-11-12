
const router = require("express").Router()
const Service = require("../models/Service")

// cadastro de servicos - começo
router.post('/', async (req, res) => {

    
    const { icon, title, text } = req.body

    if(!icon || !title || !text){
        res.status(422).json({error: "Todos os campos são obeigatórios"})
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


module.exports = router