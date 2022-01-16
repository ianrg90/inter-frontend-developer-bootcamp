import express, {Request, Response, NextFunction} from "express"
import usersRoute from "./routes/users.route"
import statusRouter from "./routes/status.route"

const app = express()

//Config da aplicação

app.use(express.json())
app.use(express.urlencoded({extended: true}))

//Configurações de rotas

app.use(statusRouter)
app.use(usersRoute)

//Inicialização do servidor

app.listen(3000, () => {
    console.log("App executando na porta 3000")
})
