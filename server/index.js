import Express from "express"

const app = Express()
app.use(Express.json())

app.post('/registro', (req, res) => {
    const {nome, sobrenome, email, senha, dataNascimento} = req.body
    if(!nome || !sobrenome || !email || !senha || !dataNascimento){
        res.send('Todos os campos devem ser preenchidos')
    }
    console.log(email)
    res.send('ta funcionando')
})

app.listen(8000)