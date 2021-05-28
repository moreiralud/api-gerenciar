const moment = require('moment')
const conexao = require('../infraestrutura/conexao')

class Atendimento{
    adiciona(atendimento,res ){

        const dataCriacao = moment().format('YYYY-MM--DD HH:MM:SS')
        const data = moment(atendimento.data, 'DD-MM-YYYY').format('YYYY-MM--DD HH:MM:SS')
        
        const dataEhValida = moment(data).isSameOrAfter(dataCriacao)
        const clienteEhValido = Atendimento.cliente.length >= 5

        const validacoes = [{
            nome: 'data',
            valido: dataEhValida,
            mensagem: 'Data deve ser maior ou igual a atual'},
            {
            nome: 'cliente',
            valido: clienteEhValido,
            mensagem: 'Cliente deve conter 5 ou mais caracteres'
            }
        ]

        const erros = validacoes.filter(campo => !campo.valido)
        




        const atendimentoDatado ={...atendimento, dataCriacao,data}


        const sql = 'INSERT INTO Atendimentos SET ?'
        conexao.query(sql, atendimentoDatado,(erro,resultados) =>{
            if (erro){
                res.status(400).json(erro)

            }else{
                res.status(201).json(resultados)
            }
        })
    }
}
module.exports = new Atendimento