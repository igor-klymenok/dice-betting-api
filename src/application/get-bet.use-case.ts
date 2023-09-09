import {IRepository} from "./interfaces/repository.interface.js";
import {Bet} from "../domain/bet.js";

export class GetBetUseCase {
    constructor(private betRepository: IRepository<Bet>) {
    }

    execute(id: number) {
        return this.betRepository.findOneById(id);
    }
}