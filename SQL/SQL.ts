import { Sequelize } from "sequelize";
import { AuthBody, InfoBody } from "../types";
import { init, auth, info } from "./functions";
import { models } from "./models";

const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "NUP.sqlite"
})

export async function initDB() {
    await models(sequelize);
    await init(sequelize);
}

export async function authUser(userData: AuthBody) {
    return await auth(sequelize, userData);
}

export async function getInfo(infoData: InfoBody) {
    return await info(sequelize, infoData)
}