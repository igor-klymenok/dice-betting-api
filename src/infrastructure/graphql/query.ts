import {
    getBestUserBetUseCase,
    getBetListUseCase,
    getBetUseCase,
    getUserListUseCase,
    getUserUseCase
} from "../../application";
import {BetResponseDto} from "./dto/bet.response.dto";
import {UserResponseDto} from "./dto/user.response.dto";

export async function getUser(_: any, { id }: { id: number }) {
    const user = await getUserUseCase.execute(id);
    if (!user) return null;

    return UserResponseDto.fromUser(user);
}

export async function getUserList() {
    const users = await getUserListUseCase.execute();

    return users.map(user => UserResponseDto.fromUser(user));
}

export async function getBet(_: any, { id }: { id: number }) {
    const bet = await getBetUseCase.execute(id);
    if (!bet) return null;

    return BetResponseDto.fromBet(bet);
}

export async function getBetList() {
    const bets = await getBetListUseCase.execute();

    return bets.map(bet => BetResponseDto.fromBet(bet));
}

export async function getBestBetPerUser(_: any, { limit }: { limit: number }) {
    const bets = await getBestUserBetUseCase.execute(limit);

    return bets.map(bet => BetResponseDto.fromBet(bet));
}