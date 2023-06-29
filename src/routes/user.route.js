// -- para criar rotas fora do arquivo principal:
const route = require('express').Router();

const userController = require('../controllers/user.controller')
const {validId, validUser} = require("../middlewares/global.middlewares")

// -- a função de callback ficará desmenbrada, dentro de controllers
route.post("/", userController.create)

// -- rota para pegar todos usuários por id:
route.get('/', userController.findAll)

// -- rota para pegar usuários com seleção id:
route.get('/:id', validId, validUser, userController.findById)

// -- rota para editar campos dos id:
route.patch('/:id', validId, validUser, userController.update)


// -- exportação da rota em si:
module.exports = route