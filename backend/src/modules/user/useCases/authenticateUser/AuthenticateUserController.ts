import { Request, Response } from "express";


class AuthenticateUserController {

    handle(req: Request, res: Response) { 

        const {email, password} = req.body;

        

    }


}

export default AuthenticateUserController;