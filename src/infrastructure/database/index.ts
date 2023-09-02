import {UserRepository} from "./user/user.repository";
import {BetRepository} from "./bet/bet.repository";

export const userRepository = new UserRepository();
export const betRepository = new BetRepository();