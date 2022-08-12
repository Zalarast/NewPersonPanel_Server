import { Sequelize } from "sequelize/types";
import { InfoBody } from "../../types";

export async function info(sequelize: Sequelize, data: InfoBody) {
    if (data.token) {
        const userInfo = await sequelize.models.Users.findOne({
            where: { token: data.token }
        })
        if (userInfo)
            return { result: true, info: { userInfo: { login: userInfo.get("login"), avatar: userInfo.get("avatar") }, ADInfo: {} } }
        else return { result: false }
    } else return { result: false }
}