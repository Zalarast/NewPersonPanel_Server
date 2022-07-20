import { Sequelize } from "sequelize/types";

export async function init (sequelize: Sequelize) {
  try {
    await sequelize.authenticate();
    console.log("Подключение к БД - успешно");
    try {
      await sequelize.sync()
      console.log("Синхронизация моделей - успешно")
    } catch (error) {
      console.error("При синхронизации моделей произошла ошибка:", error)
    }
  } catch (error) {
    console.error("При подключении к БД произошла ошибка:", error);
  }
};
