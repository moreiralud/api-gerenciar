const atendimentos = require('../models/atendimentos')
const Atendimento = require('../models/atendimentos')
module.exports = app =>{
    app.get('/atendimentos',(req,res) => {
        Atendimento.lista(res)
    })

    app.get('/atendimentos/:id', (req,res)=> {
        const id = parseInt(req.params.id)

        Atendimento.buscaPorId(id, res)
        // res.send('OK')
    })

    app.post('/atendimentos',(req,res) => {
        const atendimento = req.body
        Atendimento.adiciona(atendimento,res)
        // res.send('post atendimento ')
})

app.patch('/atendimentos/:id',(req,res)=>{
    const id = parseInt(req.params.id)
    const valores = req.body

    Atendimento.altera(id, valores, res)

})
app.delete('/atendimentos/:id', (req, res)=>{
    const id = parseInt(req.params.id)

    Atendimento.deleta(id,res)
})

}


//consign vai agrupar as rotas
//rota atendimento
//requisiçao nao sabe ler o body. Por isso, usar o body parser