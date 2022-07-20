import { Sequelize } from "sequelize/types";
import { DataTypes } from "sequelize";

export async function models (sequelize: Sequelize) {
    sequelize.define("Users", {
        id: { type: DataTypes.INTEGER, autoIncrement: true, allowNull: false, primaryKey: true },
        login: { type: DataTypes.STRING },
        password: { type: DataTypes.STRING },
        token: { type: DataTypes.STRING }
    })
}