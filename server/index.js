// импорт для считывания конфиг
require('dotenv').config()
// импорт БД нам созданый
const sequelize = require('./db')
// импорт всей модели БД
const models = require('./models/models')
// импорт всех роутеров 
const router = require('./routers/index')
// импорт корса для запросов на браузер
const cors = require('cors')
// импорт фрайма 
const express = require('express') 
// импорт для чтения файлов - картинок
const fileUpload = require('express-fileupload')
// имп из node 
const path = require('path')
// импорт мидлвайера
const errorHandler = require('./middleware/errorHandingMiddleware')
// порт для приложения из env если не задана то укз свою
const PORT = process.env.PORT || 5000

// вызов
const app = express()
// вызв фун
app.use(cors())
// для парсинга в json формат
app.use(express.json())
// для get запроса по юрл кратинок использ фрейм express
app.use(express.static(path.resolve(__dirname, 'static')))
// регестрируем для картинок
app.use(fileUpload({}))//передаем пустой объект с опциями
// подкл роутеры
app.use('/api', router)

// запрос метод на проверку
// app.get('/',(req, res)=>{
//     res.status(200).json({message:"WORKING"})
// })

// мидл который работает с ошибки обязательно должен регестрироваться в самом конце
app.use(errorHandler)

// фун для подкл БД она будет конечно асинхронной
const start = async()=>{
    try{
        // подключ к бд
        await sequelize.authenticate()
        // сверяем состояние БД со схемой БД
        await sequelize.sync()
        // укз какой порт будет прослушивать и выводить в работу также смотрим за подключ
        app.listen(PORT, ()=>console.log(`Go on ${PORT}`))
    } //для того чтобы ловить ошибки в аргументе
    catch(e){
        console.log(e)
    }
}
// вывзываем
start()