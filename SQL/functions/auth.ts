import { Sequelize } from "sequelize/types";
import { TokenGenerator } from "ts-token-generator";

export async function auth(
  sequelize: Sequelize,
  data: { login?: string; password?: string; token?: string; reauth: boolean }
): Promise<{ result: boolean; token?: string }> {
  if (data) {
    const where: { login?: string; password?: string; token?: string } = {};
    data.login && (where.login = data.login);
    data.password && (where.password = data.password);
    data.token && (where.token = data.token);
    const userData = await sequelize.models.Users.findOne({
      where: where,
    });
    if (userData) {
      if (data.reauth) {
        const tokgen = new TokenGenerator();
        userData.set("token", tokgen.generate());
        try {
          await userData.save();
        } catch (error) {
          console.error("При записи токена в БД произошла ошибка:", error);
        }
      }
      return { result: true, token: userData.get("token") as string };
    } else return { result: false };
  } else return { result: false };
}
