import {IRepository} from "./interfaces/repository.interface.js";
import {Bet} from "../domain/bet.js";

export class GetBetListUseCase {
    constructor(private betRepository: IRepository<Bet>) {
    }

    execute(): Promise<Array<Bet>> {
        return this.betRepository.findAll();
    }
}