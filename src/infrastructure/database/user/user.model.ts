import {DataTypes, Model} from "sequelize";
import {connection} from "../connection.provider.js";

export class UserModel extends Model {
    declare id: number;
    declare name: string;
    declare balance: number;
}

UserModel.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    balance: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
    },
}, {
    sequelize: connection,
    modelName: 'User'
});

UserModel.sync({ force: true }).then((model) => {
    console.log('Sync UserModel successful')
    return UserModel.create({
        name: 'John Doe',
        balance: 100
    })
})