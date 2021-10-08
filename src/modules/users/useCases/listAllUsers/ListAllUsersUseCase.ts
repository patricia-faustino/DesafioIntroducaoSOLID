/* eslint-disable prettier/prettier */
import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const userExists = this.usersRepository.findById(user_id);
    if (!userExists) throw new Error("Usuário não existe.");

    if (userExists.admin === false) throw new Error("Usuário não é um admin.");

    return this.usersRepository.list();
  }
}

export { ListAllUsersUseCase };
