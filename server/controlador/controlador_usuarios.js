import { User } from "../db.js"

const Todos = async (req, res) => {
    const AllUsers = User.findAll()
    res.send(AllUsers)
}
const LocUser = async (req, res) => {
    const { email } = req.body

    if (!email) {
        res.send('Insira o email do usuário na qual você gostaria de verificar.');
        return
    }
    const OneUser = await User.findOne({ where: { email: email } })
    res.send(OneUser)
}

const DeletUser = async (req, res) => {
    const { email } = req.body

    if (!email) {
        res.send('Insira o email do usuário na qual você gostaria de deletar.');
        return
    }
    
    const ByeUser = await User.destroy({ where: { email: email } })
    if (ByeUser) {
        res.send("Usuário deletado");
    } else {
        res.send("Usuário não encontrado.");
    }
}

export { Todos, LocUser, DeletUser }