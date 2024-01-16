import CreateUserUseCase from "./CreateUserUseCase"
import { Response, Request } from "express";

class CreateUserController {

    async handle(req: Request, res: Response) {

        const {
            name,
            email,
            password
        } = req.body

        const createUserUseCase = new CreateUserUseCase();

        const user = await createUserUseCase.execute(name, email, password);

        return res.status(201).json({"message" : "usuário criado", user})

    }

}

export default CreateUserController