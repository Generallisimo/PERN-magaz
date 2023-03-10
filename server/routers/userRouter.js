const Router = require('express')
const router = new Router()
// имп мидла который проверяет на автаризованность 
const authMidlleware = require('../middleware/authMiddleware')
// импорт созданного нами контролера 
const userController = require('../controllers/userController')
// метод пост для того чтобы зарегстрироваться
router.post('/registretion', userController.registretion) // вызваем теперь созданные намифун
router.post('/login', userController.login)
// метод гет для того чтобы получать информацию о реальном пользователе
router.get('/auth', authMidlleware, userController.check)//добавляем проверку мидла на сущ польз
// так не правильно писать поэтому мы создадим контроллеры
// router.get('/auth', (req, res)=>{
//         res.json({message:"WORKING"})
//     })
module.exports = router
