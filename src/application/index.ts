import {CreateBetUseCase} from "./create-bet.use-case";

import {betRepository, userRepository} from "../infrastructure/database";
import {GetBestUserBetUseCase} from "./get-best-user-bet.use-case";
import {GetBetUseCase} from "./get-bet.use-case";
import {GetBetListUseCase} from "./get-bet-list.use-case";
import {GetUserUseCase} from "./get-user.use-case";
import {GetUserListUseCase} from "./get-user-list.use-case";

export const createBetUseCase = new CreateBetUseCase(userRepository, betRepository)
export const getBestUserBetUseCase = new GetBestUserBetUseCase(betRepository)
export const getBetUseCase = new GetBetUseCase(betRepository);
export const getBetListUseCase = new GetBetListUseCase(betRepository);
export const getUserUseCase = new GetUserUseCase(userRepository);
export const getUserListUseCase = new GetUserListUseCase(userRepository);