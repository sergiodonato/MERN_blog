// -- para criar rotas fora do arquivo principal:
const route = require('express').Router();
const userController = require('../controllers/user.controller')

// -- a função de callback ficará desmenbrada, dentro de controllers
route.get("/", userController.soma)

module.exports = route