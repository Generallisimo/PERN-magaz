const Router = require('express')
const userController = require('../controllers/userController')
const router = new Router()
// импорт созданного нами контролера 
const UserController = require('../controllers/userController')
// метод пост для того чтобы зарегстрироваться
router.post('/registretion', userController.registretion) // вызваем теперь созданные намифун
router.post('/login', userController.login)
// метод гет для того чтобы получать информацию о реальном пользователе
router.get('/auth', userController.check)
// так не правильно писать поэтому мы создадим контроллеры
// router.get('/auth', (req, res)=>{
//         res.json({message:"WORKING"})
//     })
module.exports = router
