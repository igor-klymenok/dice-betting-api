import {IRepository} from "./interfaces/repository.interface";
import {Bet} from "../domain/bet";

export class GetBetListUseCase {
    constructor(private betRepository: IRepository<Bet>) {
    }

    execute(): Promise<Array<Bet>> {
        return this.betRepository.findAll();
    }
}