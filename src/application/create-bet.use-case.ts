import {IRepository} from "./interfaces/repository.interface.js";
import {User} from "../domain/user.js";
import {Bet} from "../domain/bet.js";
import {Dice} from "../domain/dice.js";

export class CreateBetUseCase {
    constructor(private userRepository: IRepository<User>, private betRepository: IRepository<Bet>) {
    }

    async execute(userId: number, betAmount: number, chance: number): Promise<Bet> {
        const user = await this.userRepository.findOneById(userId);
        if (!user) {
            throw new Error('User not found');
        }

        let bet: Bet = Bet.createWithoutId({
            userId: user.id,
            betAmount,
            chance,
            payout: betAmount * 2
        });
        let updatedBalance = bet.placeBet(user.balance, new Dice())

        // TODO: Potentially better to handle as a single transaction
        await this.userRepository.updateOneById(user.id, { balance: updatedBalance });
        bet = await this.betRepository.createOne(bet);

        return bet;
    }
}