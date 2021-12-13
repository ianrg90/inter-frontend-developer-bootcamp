import { Router } from "express";
import userAuthenticated from "../middlewares/userAuthenticated";
import { UserController } from "../resources/user/user.controllers";

const userRouter = Router()
const userController =  new UserController()

userRouter.post("/signin", userController.signin)

userRouter.post("/singup", userController.signup)

userRouter.get("/me", userAuthenticated, userController.me)

export default userRouter