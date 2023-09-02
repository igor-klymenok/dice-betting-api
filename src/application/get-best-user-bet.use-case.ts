import {Bet} from "../domain/bet";
import {IRepository} from "./interfaces/repository.interface";
import {groupBy} from "lodash";

export class GetBestUserBetUseCase {
    constructor(private betRepository: IRepository<Bet>) {
    }

    async execute(limit: number): Promise<Array<Bet>> {
        const results = await this.betRepository.findAll({ win: true }, { betAmount: 'DESC', payout: 'DESC' }, limit)
        if (!results.length) return [];

        const groupedBets = groupBy(results, 'userId')

        return Object.values(groupedBets).flatMap(bet => {
            return limit ? bet.slice(0, limit) : bet;
        })
    }
}