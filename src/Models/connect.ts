import { Sequelize } from "sequelize"

// criando uma nova instância do Sequelize para criar uma conexão com o sqlite3

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite', // Caminho do arquivo do banco
});
async function connectDatabase() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

connectDatabase();
export default sequelize;