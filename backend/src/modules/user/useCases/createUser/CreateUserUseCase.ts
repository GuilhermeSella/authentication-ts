import { sign } from "jsonwebtoken";
import { schemaAuthenticateValidationUser } from "../../../../zod/user";
import UserRepository from "../../infra/repositories/UserRepository";


class CreateUserUseCase {

    async execute(name: string, email: string, password: string) {

        const validatedData = this.validateDataCreateUser(name, email, password);

        const userRepository = new UserRepository();
    
        const user = userRepository.createUser({name, email, password});

        return user;

    }

    private validateDataCreateUser(name: string, email: string, password: string) {

        const validatedDataUser = schemaAuthenticateValidationUser.safeParse({name, email, password});

        if(!validatedDataUser.success){
            throw new Error('Invalidate credentials')
        }

        return validatedDataUser;

    }

}

export default CreateUserUseCase;