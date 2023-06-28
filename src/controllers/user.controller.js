const userService = require('../services/user.service')

// -- as func de callback das rotas, async(pq conecta em lugares distintos):
const create = async (req, res) => {
    const {name, username, email, password, avatar, background} = req.body

    // -- validador se todos campos estão preenchidos:
    if(!name || !username || !email || !password || !avatar || !background) {
        res.status(400).send({message: "Submit all fields for registration"})
    }

    // -- resposta + verificação:
    const user = await userService.create(req.body)

    if (!user) {
        return res.status(400).send({message: "Error creating User"})
    }

    // -- resposta de perfil criado:
    res.status(201).send({
        message: "User created successfully",
        user: {
            id: user._id,
            name,
            username,
            email,
            avatar,
            background,
        },
    })
};

module.exports = { create };