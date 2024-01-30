import { Sequelize } from "sequelize";

const db = new Sequelize('test_db', 'root', 'rootadmin', {
    host: "localhost",
    dialect: "mysql"
});

export default db;