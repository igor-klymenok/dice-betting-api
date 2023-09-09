import {User} from "../domain/user.js";
import {IRepository} from "./interfaces/repository.interface.js";

export class GetUserUseCase {
    constructor(private userRepository: IRepository<User>) {
    }

    execute(id: number): Promise<User | null> {
        return this.userRepository.findOneById(id);
    }
}