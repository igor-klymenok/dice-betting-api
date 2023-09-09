import {Bet} from "../domain/bet.js";
import {IRepository} from "./interfaces/repository.interface.js";
import groupBy from "lodash/groupBy.js";

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