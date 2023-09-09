import {Sequelize} from "sequelize";
import * as path from "node:path";

export const connection = new Sequelize({
    dialect: 'sqlite',
    storage: path.resolve(process.cwd(), '.database.sqlite')
});