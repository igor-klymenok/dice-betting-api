import {BetModel} from "./bet.model.js";
import {Bet} from "../../../domain/bet.js";
import {IRepository} from "../../../application/interfaces/repository.interface.js";

export class BetRepository implements IRepository<Bet> {
    async createOne(entity: Bet): Promise<Bet> {
        const result = await BetModel.create({
            userId: entity.userId,
            betAmount: entity.betAmount,
            chance: entity.chance,
            payout: entity.payout,
            win: entity.isWin,
        } as Omit<BetModel, 'id'>)

        return new Bet({
            id: result.id,
            userId: result.userId,
            betAmount: result.betAmount,
            chance: result.chance,
            payout: result.payout,
            isWin: result.win,
        })
    }

    async findAll(
        where?: Partial<BetModel>,
        order?: { [key in keyof Partial<BetModel>]: 'ASC' | 'DESC' },
        limit?: number
    ): Promise<Array<Bet>> {
        const result = await BetModel.findAll({
            where: where ?? {},
            order: order ? Object.entries(order).map(entry => [entry[0], entry[1]]) : [],
            limit: limit ?? undefined
        });
        return Array.from(result.values()).map(model => {
            return new Bet({
                id: model.id,
                userId: model.userId,
                betAmount: model.betAmount,
                chance: model.chance,
                payout: model.payout,
                isWin: model.win,
            })
        })
    }

    async findOneById(id: number): Promise<Bet | null> {
        const result = await BetModel.findOne({where: {id}})
        if (!result) return null;

        return new Bet({
            id: result.id,
            userId: result.userId,
            betAmount: result.betAmount,
            chance: result.chance,
            payout: result.payout,
            isWin: result.win,
        })
    }

    async updateOneById(id: number, data: Partial<Bet>): Promise<Bet> {
        const betModel = await BetModel.findOne({ where: { id } });
        if (!betModel) {
            throw new Error('Failed to update Bet. Bet not found');
        }

        if (data.betAmount) betModel.betAmount = data.betAmount;
        if (data.chance) betModel.chance = data.chance;
        if (data.payout) betModel.payout = data.payout;
        if (data.isWin) betModel.win = data.isWin;

        await betModel.save();

        return new Bet({
            id: betModel.id,
            userId: betModel.userId,
            betAmount: betModel.betAmount,
            chance: betModel.chance,
            payout: betModel.payout,
            isWin: betModel.win,
        })
    }


}