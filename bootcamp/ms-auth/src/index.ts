import "dotenv/config"
import express, {Request, Response, NextFunction} from "express"
import usersRoute from "./routes/users.route"
import statusRouter from "./routes/status.route"
import errorHandler from "./middlewares/error.handler.middleware"
import authRoute from "./routes/auth.route"
import jwtAuthMiddleware from "./middlewares/jwt-auth.middleware"


const app = express()

//Config da aplicação

app.use(express.json())
app.use(express.urlencoded({extended: true}))

//Configurações de rotas

app.use(statusRouter)
app.use(authRoute)

app.use(jwtAuthMiddleware)
app.use(usersRoute)


//Configuracão de Errors handlers

app.use(errorHandler)

//Inicialização do servidor

app.listen(3000, () => {
    console.log("App executando na porta 3000")
})
