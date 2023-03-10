const Router = require('express')
const typeController = require('../controllers/typeController')
const router = new Router()
// имп проверки на роль польз для изменения
const checkMiddleware = require('../middleware/checkMiddleware')

// метод пост для того чтобы создавать
router.post('/',checkMiddleware('ADMIN'), typeController.create)//вызываем вторым параметром и укз роль для доступа
// метод гет для того чтобы получать
router.get('/', typeController.getAll) //передаем фун через контролеры 
module.exports = router
