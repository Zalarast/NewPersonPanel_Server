import { Sequelize } from "sequelize/types";
import { TokenGenerator, TokenBase } from "ts-token-generator";

export async function auth(
  sequelize: Sequelize,
  data: { login: string; password: string; token: string }
) {
  if (data) {
    const userData = await sequelize.models.Users.findOne({
      where: data,
    });
    if (userData) {
      if (!userData?.get("token")) {
        const tokgen = new TokenGenerator();
        userData.set("token", tokgen.generate());
        try {
          await userData.save();
        } catch (error) {
          console.error("При записи токена в БД произошла ошибка:", error);
        }
      }
      return { result: true, token: userData.get("token") };
    } else return { result: false };
  } else return { result: false };
}
