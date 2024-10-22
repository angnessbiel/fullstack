import Express from "express"
import { criarTabelas, User } from "./db.js"
import bcryptjs from "bcryptjs"

const app = Express()
app.use(Express.json())
//criarTabelas()

app.post('/registro', async (req, res) => {
    const {nome, sobrenome, email, senha, dataNascimento} = req.body
    if(!nome || !sobrenome || !email || !senha || !dataNascimento){
        res.send('Todos os campos devem ser preenchidos')
    }
    const userExist = await User.findOne({email :email})    
    if (userExist){
        res.send('usuario ja existe')
        return
    }
    const senhaCriptografada = bcryptjs.hashSync(senha, 10)
    
    const teste = await User.create({nome, sobrenome, email, senha: senhaCriptografada, dataNascimento})
    res.send('ok usuario criado')

})

app.post('/login',async (req, res) => {
const {email, senha} = req.body
if (!email || !senha) {
}
const userExist = await User.findOne({email :email})    
if (!userExist){
    res.send('usuario nao existe')
    return
}
const senhaValida = bcryptjs.compareSync(senha, userExiste.senha)
if (!senhaValida){
    res.send('senha invalida')
    return
}
})

app.listen(8000) 