// -- exportações:
const express = require('express')
const connetcDatabase = require('./src/database/db')
// -- criação da rota com bdd:
const userRoute = require('./src/routes/user.route')

const app = express()
const port = 3000

connetcDatabase()
app.use(express.json())
app.use('/user', userRoute)


app.listen(port, () => console.log(`Servidor rodando na porta ${port}`))