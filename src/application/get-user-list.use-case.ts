import {IRepository} from "./interfaces/repository.interface";
import {User} from "../domain/user";

export class GetUserListUseCase {
    constructor(private userRepository: IRepository<User>) {
    }

    execute(): Promise<Array<User>> {
        return this.userRepository.findAll();
    }
}