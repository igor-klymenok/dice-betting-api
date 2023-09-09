import {IRepository} from "../../../application/interfaces/repository.interface.js";
import {User} from "../../../domain/user.js";
import {UserModel} from "./user.model.js";

export class UserRepository implements IRepository<User> {
    async createOne(entity: User): Promise<User> {
        const result = await UserModel.create({
            name: entity.name,
            balance: entity.balance,
        })

        return new User({
            id: result.id,
            name: result.name,
            balance: result.balance,
        })
    }

    async findAll(): Promise<Array<User>> {
        const result = await UserModel.findAll();
        return Array.from(result.values()).map(model => {
            return new User({
                id: model.id,
                balance: model.balance,
                name: model.name,
            })
        })
    }

    async findOneById(id: number): Promise<User | null> {
        const result = await UserModel.findOne({ where: { id } })
        if (!result) return null;

        return new User({
            id: result.id,
            name: result.name,
            balance: result.balance,
        })
    }

    async updateOneById(id: number, data: Partial<User>): Promise<User> {
        const userModel = await UserModel.findOne({ where: { id } });
        if (!userModel) {
            throw new Error('Failed to update User. User not found');
        }

        if (data.name) userModel.name = data.name;
        if (data.balance) userModel.balance = data.balance;

        await userModel.save();

        return new User({
            id: userModel.id,
            name: userModel.name,
            balance: userModel.balance,
        })
    }
}