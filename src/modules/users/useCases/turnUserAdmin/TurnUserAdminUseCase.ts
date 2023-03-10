import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) { }

  execute({ user_id }: IRequest): User | void {
    const userExists = this.usersRepository.findById(user_id);
    if (!userExists) {
      throw new Error("User doesn't exists.");
    }
    const user = this.usersRepository.turnAdmin(userExists);
    return user;
  }
}

export { TurnUserAdminUseCase };
