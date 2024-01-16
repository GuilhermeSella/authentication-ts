import { User } from "@prisma/client";
import { prisma } from "../../../../shared/prisma";
import IUserRepository from "../../contracts/IUserRepository";
import ICreateUserDTO from "../../dtos/ICreateUserDTO";


class UserRepository implements IUserRepository {
    
    async createUser(data: ICreateUserDTO): Promise<User> {
        
        const user = prisma.user.create({
            data: data
        })

        return user;

    }

}


export default UserRepository;