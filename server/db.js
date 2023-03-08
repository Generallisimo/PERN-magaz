// импорт ОРМ
const {Sequelize} = require('sequelize')

// эскопрт объекта
module.exports=new Sequelize(
    // подключаем БД
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        dialect:'postgres',
        host: process.env.DB_HOST,
        port: process.env.DB_PORT
    }
)