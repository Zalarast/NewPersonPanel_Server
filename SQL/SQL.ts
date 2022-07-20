import { Sequelize } from "sequelize";
import { init } from "./functions";
import { models } from "./models";

const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "NUP.sqlite"
})

export async function initDB() {
    await models(sequelize);
    await init(sequelize);
}