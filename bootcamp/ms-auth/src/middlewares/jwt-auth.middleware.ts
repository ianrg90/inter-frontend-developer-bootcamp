import { Request, Response, NextFunction } from "express";
import ForbiddenError from "../models/errors/forbidden.error.model";
import JWT from "jsonwebtoken";
import AuthError from "../models/errors/auth.error.model";

async function jwtAuthMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const authHeader = req.headers["authorization"];
    if (!authHeader) {
      throw new ForbiddenError("Credencias não informadas");
    }

    const [authType, token] = authHeader.split(" ");

    if (authType !== "Bearer" || !token) {
      throw new ForbiddenError("Tipo de autenticação inválida");
    }

    const decoded = JWT.decode(token, { json: true });

    const expirationTime = decoded?.exp * 1000;
    const currentTime = Date.now();

    if (currentTime >= expirationTime) {
 
      throw new AuthError("Token expirado");
    }

    try {
      const tokenPayload = JWT.verify(token, process.env.JWT_KEY);

      if (typeof tokenPayload !== "object" || !tokenPayload.sub) {
        throw new ForbiddenError("Token inválido");
      }

      //If the code pass the last check we know that the token is trusthworthy
      //So we don't need to consult the database
      const user = { uuid: tokenPayload.sub, username: tokenPayload.username };

      req.user = user;

      next();
    } catch (error) {
      throw new ForbiddenError("Token inválido");
    }
  } catch (error) {
    next(error);
  }
}

export default jwtAuthMiddleware;
