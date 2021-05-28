const Atendimento = require('../models/atendimentos')
module.exports = app =>{
    app.get('/atendimentos',(req,res) => res.send('atendimentos está na rota atendimentos e está realizando um GET'))

    app.post('/atendimentos',(req,res) => {
        const atendimento = req.body
        Atendimento.adiciona(atendimento,res)
        // res.send('post atendimento ')

})
}


//consign vai agrupar as rotas
//rota atendimento
//requisiçao nao sabe ler o body. Por isso, usar o body parser