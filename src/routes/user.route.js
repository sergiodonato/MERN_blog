// -- para criar rotas fora do arquivo principal:
import express from 'express'
const router = express.Router()
// const route = require('express').Router();

import userController from '../controllers/user.controller.js'
// const userController = require('../controllers/user.controller')

import {validId, validUser} from "../middlewares/global.middlewares.js"
// const {validId, validUser} = require("../middlewares/global.middlewares")

// -- a função de callback ficará desmenbrada, dentro de controllers
router.post("/", userController.create)

// -- rota para pegar todos usuários por id:
router.get('/', userController.findAll)

// -- rota para pegar usuários com seleção id:
router.get('/:id', validId, validUser, userController.findById)

// -- rota para editar campos dos id:
router.patch('/:id', validId, validUser, userController.update)


// -- exportação da rota em si:
export default router