import {IRepository} from "./interfaces/repository.interface.js";
import {User} from "../domain/user.js";

export class GetUserListUseCase {
    constructor(private userRepository: IRepository<User>) {
    }

    execute(): Promise<Array<User>> {
        return this.userRepository.findAll();
    }
}