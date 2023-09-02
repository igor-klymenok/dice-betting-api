import {User} from "../../../domain/user";

export class UserResponseDto {
    static fromUser(entity: User) {
        return {
            id: entity.id,
            name: entity.name,
            balance: entity.balance,
        }
    }
}