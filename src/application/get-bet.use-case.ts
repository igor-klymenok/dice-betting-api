import {IRepository} from "./interfaces/repository.interface";
import {Bet} from "../domain/bet";

export class GetBetUseCase {
    constructor(private betRepository: IRepository<Bet>) {
    }

    execute(id: number) {
        return this.betRepository.findOneById(id);
    }
}