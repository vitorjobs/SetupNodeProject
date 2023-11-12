import express from 'express'
const util = require('node:util');

const PORT = 3000
const HOST = '0.0.0.0'

const app = express()

app.get('/', (req, res) => {
    res.send('Página Inicial')
    util.log('INFO', 'Acessou a página inicial.');
})

app.get('/teste', (req, res) => {
    res.send('Página Teste')
    util.log('INFO', 'Acessou a página de teste');
})

app.listen(PORT, HOST)
