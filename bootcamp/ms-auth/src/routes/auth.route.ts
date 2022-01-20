import { Router, Request, Response, NextFunction } from "express";
import JWT, { SignOptions } from "jsonwebtoken";
import { StatusCodes } from "http-status-codes";
import basicAuthMiddleware from "../middlewares/basic.auth.middleware";
import ForbiddenError from "../models/errors/forbidden.error.model";
import jwtAuthMiddleware from "../middlewares/jwt-auth.middleware";
import AuthError from "../models/errors/auth.error.model";

const authRoute = Router();

authRoute.post(
  "/token",
  basicAuthMiddleware,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = req.user;

      if (!user) {
        throw new ForbiddenError("Usuário não informado");
      }
      const jwtPayload = { username: user?.username };
      const jwtOptions: SignOptions = { subject: user.uuid, expiresIn: "2m" };
      const secretKey = process.env.JWT_KEY;

      const jwt = JWT.sign(jwtPayload, secretKey, jwtOptions);

      res.status(StatusCodes.OK).json({ token: jwt });
    } catch (error) {
      next(error);
    }
  }
);

//Sometime the order of the routes matter
//If they use the same http method
authRoute.post(
  "/token/validate",
  jwtAuthMiddleware,
  (req: Request, res: Response, next: NextFunction) => {
    res.sendStatus(StatusCodes.OK);
  }
);

authRoute.post(
  "/token/refresh",
  (req: Request, res: Response, next: NextFunction) => {
    try {
      const authHeader = req.headers["authorization"];

      if (!authHeader) {
        throw new AuthError("Usuario não possui token");
      }

      const [authType, token] = authHeader?.split(" ");

      if (authType !== "Bearer" || !token) {
        throw new AuthError("Tipo de autenticação inválida");
      }

      try {
        const tokenPayload = JWT.verify(token, process.env.JWT_KEY, {
          ignoreExpiration: true,
        });

        if (typeof tokenPayload !== "object" || !tokenPayload.sub) {
          throw new AuthError("Token inválido");
        }

        const jwtPayload = { username: tokenPayload.username };
        const jwtOptions: SignOptions = {
          subject: tokenPayload.sub,
          expiresIn: "2m",
        };
        const secretKey = process.env.JWT_KEY;

        const jwt = JWT.sign(jwtPayload, secretKey, jwtOptions);

        res.status(StatusCodes.OK).send({ token: jwt });
      } catch (error) {
        throw new AuthError("Token inválido");
      }
    } catch (error) {
      next(error);
    }
  }
);

export default authRoute;
