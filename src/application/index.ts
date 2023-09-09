import {CreateBetUseCase} from "./create-bet.use-case.js";

import {betRepository, userRepository} from "../infrastructure/database/index.js";
import {GetBestUserBetUseCase} from "./get-best-user-bet.use-case.js";
import {GetBetUseCase} from "./get-bet.use-case.js";
import {GetBetListUseCase} from "./get-bet-list.use-case.js";
import {GetUserUseCase} from "./get-user.use-case.js";
import {GetUserListUseCase} from "./get-user-list.use-case.js";

export const createBetUseCase = new CreateBetUseCase(userRepository, betRepository)
export const getBestUserBetUseCase = new GetBestUserBetUseCase(betRepository)
export const getBetUseCase = new GetBetUseCase(betRepository);
export const getBetListUseCase = new GetBetListUseCase(betRepository);
export const getUserUseCase = new GetUserUseCase(userRepository);
export const getUserListUseCase = new GetUserListUseCase(userRepository);