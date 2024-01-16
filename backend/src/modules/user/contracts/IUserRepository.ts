import { User } from "@prisma/client";
import ICreateUserDTO from "../dtos/ICreateUserDTO";


interface IUserRepository {
    createUser(data: ICreateUserDTO): Promise<User>;
}

export default IUserRepository;