import {UserRepository} from "./user/user.repository.js";
import {BetRepository} from "./bet/bet.repository.js";

export const userRepository = new UserRepository();
export const betRepository = new BetRepository();