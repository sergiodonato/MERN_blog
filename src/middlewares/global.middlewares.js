// -- em pró de boas práticas, este arquivo é uma coletânea de funções com uso frequente:

import mongoose from 'mongoose'
// const mongoose = require("mongoose")
import userService from '../services/user.service.js'
// const userService = require('../services/user.service')

export const validId = (req, res, next) => {
    try {
        const id = req.params.id

        // -- verificador se id está correto na busca:
        if(!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).send({ message: "Invalid ID" })
        }

        next()
    } catch (err) {
        res.status(500).send({ message: err.message})
    }
}

export const validUser = async (req, res, next) => {
    try {    const id = req.params.id

        const user = await userService.findByIdService(id)

        if(!user) {
            return res.status(400).send({ message: "User not found" })
        }

        req.id = id
        req.user = user

        next()
    } catch (err) {
        res.status(500).send({ message: err.message})
    }
}

// export default { validId, validUser }