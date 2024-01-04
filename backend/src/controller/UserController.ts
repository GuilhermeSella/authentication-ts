import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma  = new PrismaClient()

export class UserController {



    async getUsers(req:Request, res:Response){

        const users = await prisma.user.findMany()

        res.status(200).json({"Lista de Usuários":  users })

    }

    async register(req:Request,res:Response){

        const {name, email, password} = req.body;

        const user = await prisma.user.create({
            data:{
                name,
                email,
                password
            }
        })

        return res.status(200).json({
            "message":"Usuário criado!",
            "user": user
        })

    }




}