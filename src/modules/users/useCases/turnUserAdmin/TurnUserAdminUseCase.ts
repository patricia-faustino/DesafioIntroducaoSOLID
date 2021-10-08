/* eslint-disable prettier/prettier */
import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    // Complete aqui
    const userAlreadExists = this.usersRepository.findById(user_id);

    if(!userAlreadExists){
      throw new Error("Usuário não existe. Tente novamente.");
    }
    
    this.usersRepository.turnAdmin(userAlreadExists);

    return userAlreadExists;
  }
}

export { TurnUserAdminUseCase };
