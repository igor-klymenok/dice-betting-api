import {Bet} from "../../../domain/bet";

export class BetResponseDto {
    static fromBet(bet: Bet) {
        return {
            id: bet.id,
            userId: bet.userId,
            betAmount: bet.betAmount,
            chance: bet.chance,
            payout: bet.payout,
            win: bet.isWin,
        }
    }
}