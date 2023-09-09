import {createBetUseCase} from "../../application/index.js";
import {BetResponseDto} from "./dto/bet.response.dto.js";

export async function createBet(_: any, {betAmount, chance, userId}: {
    userId: number,
    betAmount: number,
    chance: number
}) {
    const bet = await createBetUseCase.execute(userId, betAmount, chance);

    return BetResponseDto.fromBet(bet);
}