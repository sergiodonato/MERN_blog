const userService = require('../services/user.service')


// -- as func de callback das rotas, async(pq conecta em lugares distintos):
const create = async (req, res) => {
    const {name, username, email, password, avatar, background} = req.body

    // -- validador se todos campos estão preenchidos(pré envio para bdd):
    if(!name || !username || !email || !password || !avatar || !background) {
        res.status(400).send({message: "Submit all fields for registration"})
    }

    // -- resposta + verificação:
    const user = await userService.createService(req.body)

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

// -- função de busca por id no bDD's, asybc tb:
const findAll = async (req, res) => {
    const users = await userService.findAllService()

    // -- verificação se está recebendo os usuários:
    if(users.length === 0) {
        return res.status(400).send({ message: "Ther are no registered users "})
    }

    res.send(users)
}

// -- função de busca por id unico no bDD's:
const findById = async (req, res) => {
    const user = req.user

    res.send(user)
}

// -- função update bDD's:
const update = async (req, res) => {
    const {name, username, email, password, avatar, background} = req.body

    if(!name && !username && !email && !password && !avatar && !background) {
        res.status(400).send({message: "Submit at least one field for update"})
    }

    const {id, user} = req;

    await userService.updateService(
        id,
        name,
        username,
        email,
        password,
        avatar,
        background,
    )

    res.send({ message: "User successfully updated!"})
}

module.exports = { create, findAll, findById, update };