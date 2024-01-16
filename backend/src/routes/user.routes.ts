import { Router } from "express";
import CreateUserController from "../modules/user/useCases/createUser/CreateUserController";

export const routerUser = Router();

const createUserController = new CreateUserController();

routerUser.post("/create", createUserController.handle)
