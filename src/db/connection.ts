import { Sequelize } from "sequelize";


const sequelize = new Sequelize('correos', 'root', '123456', {
    host: 'localhost',
    dialect: 'mysql',   
});

export default sequelize;