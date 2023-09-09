import {DataTypes, Model} from "sequelize";
import {connection} from "../connection.provider.js";

export class BetModel extends Model {
    declare id: number;
    declare userId: number;
    declare betAmount: number;
    declare chance: number;
    declare payout: number;
    declare win: boolean;
}

BetModel.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    betAmount: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
        field: 'bet_amount'
    },
    chance: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    payout: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    win: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    }
}, {
    sequelize: connection,
    modelName: 'Bet'
});

BetModel.sync({ force: true }).then(() => {
    console.log('Sync BetModel successful')
})
