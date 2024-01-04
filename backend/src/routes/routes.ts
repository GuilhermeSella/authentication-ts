import { Router } from "express";
import { UserController } from "../controller/UserController";
export const router = Router();


const usercontroller = new UserController();

router.get("/users", usercontroller.getUsers)

router.post("/register", usercontroller.register)