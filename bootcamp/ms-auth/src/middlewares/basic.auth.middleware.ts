import { Request, Response, NextFunction } from "express"
import ForbiddenError from "../models/errors/forbidden.error.model";
import userRepository from "../repositories/user.repository";

async function basicAuthMiddleware(req: Request, res: Response, next : NextFunction){
    try {
        const authHeader = req.headers["authorization"];

        if (!authHeader) {
          throw new ForbiddenError("Credenciais não informadas");
        }
  
        const [authType, token] = authHeader.split(" ");
  
        if (authType !== "Basic" || !token) {
          throw new ForbiddenError("Tipo de autenticação inválida");
        }
  
        const tokenContent = Buffer.from(token, "base64").toString("utf-8");
  
        const [username, password] = tokenContent.split(":");
  
        if (!username || !password) {
          throw new ForbiddenError("Credenciais não preenchidas");
        }
  
        const user = await userRepository.findByUsernameAndPassword(
          username,
          password
        );
  
        if (!user) {
          throw new ForbiddenError("Usuário ou senha inválidos");
        }

        req.user = user
        next()
        
    } catch (error) {
        next(error)
    }

}

export default basicAuthMiddleware