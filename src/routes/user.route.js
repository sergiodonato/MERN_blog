// -- para criar rotas fora do arquivo principal:
import { Router } from "express";
const router = Router()

import userController from '../controllers/user.controller.js'

import {validId, validUser} from "../middlewares/global.middlewares.js"

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