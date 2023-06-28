// -- as func de callback das rotas:
const create = (req, res) => {
    const {name, username, email, password, avatar, background} = req.body

    // -- validador se todos campos estão preenchidos:
    if(!name || !username || !email || !password || !avatar || !background) {
        res.status(400).send({message: "Submit all fields for registration"})
    }

    // -- resposta de perfil criado:
    res.status(201).send({
        message: "User created successfully",
        user: {
            name,
            username,
            email,
            avatar,
            background,
        },
    })
};

module.exports = { create };