import Express from "express";
import cors from "cors";
import { rotas as rotas_autenticadas } from './roteamento/rotas_autenticadas.js';
import { rotas_usuarios } from './roteamento/rotas_usuarios.js';

const app = Express();
app.use(Express.json());
app.use(cors());
app.use('/autenticacao', rotas_autenticadas);
app.use('/usuarios', rotas_usuarios);

app.listen(8000);
