import express from 'express'
const app = express()

app.get('/',(req, res)=>{
    res.send('<h3>Bem Vindo ao Site</h3>')
})

app.get('/cliente', function(req, res){
    res.send('<h5>Listagem de Clientes</h5>')
})

app.get('/produto/:id', function(req, res){
    let codigo = req.params.id
    let resultado = codigo * 2
    res.send('Meu Produto: '+resultado)
})

const porta = 8000
app.listen(porta, function(){
    console.log('Servidor rodando em http://localhost:8000')
})