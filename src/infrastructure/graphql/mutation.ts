import {createBetUseCase} from "../../application";
import {BetResponseDto} from "./dto/bet.response.dto";

export async function createBet(_: any, {betAmount, chance, userId}: {
    userId: number,
    betAmount: number,
    chance: number
}) {
    const bet = await createBetUseCase.execute(userId, betAmount, chance);

    return BetResponseDto.fromBet(bet);
}