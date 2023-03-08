// основной файл в роутерах 
// импорт роутер из экспреса
const Router = require('express')
// создаем объект 
const router = new Router()
// импорт всех роутеров в один
const typeRouter = require('./typeRouter')
const brandRouter = require('./brandRouter')
const deviceRouter = require('./deviceRouter')
const userRouter = require('./userRouter')
// указываем первым параметром url для обработки а вторым уже сам роутер
router.use('/user', userRouter)
router.use('/type', typeRouter)
router.use('/brand', brandRouter)
router.use('/device', deviceRouter)
// экспорт
module.exports = router