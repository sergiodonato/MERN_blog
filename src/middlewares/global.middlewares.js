// -- em pró de boas práticas, este arquivo é uma coletânea de funções com uso frequente:

const mongoose = require("mongoose")
const userService = require('../services/user.service')

const validId = (req, res, next) => {
    const id = req.params.id

    // -- verificador se id está correto na busca:
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).send({ message: "Invalid ID" })
    }

    next()
}

const validUser = async (req, res, next) => {
    const id = req.params.id

    const user = await userService.findByIdService(id)

    if(!user) {
        return res.status(400).send({ message: "User not found" })
    }

    req.id = id
    req.user = user

    next()
}

module.exports = { validId, validUser }