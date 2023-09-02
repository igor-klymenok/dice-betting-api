import {User} from "../domain/user";
import {IRepository} from "./interfaces/repository.interface";

export class GetUserUseCase {
    constructor(private userRepository: IRepository<User>) {
    }

    execute(id: number): Promise<User | null> {
        return this.userRepository.findOneById(id);
    }
}