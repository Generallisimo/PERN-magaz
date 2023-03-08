const Router = require('express')
const typeController = require('../controllers/typeController')
const router = new Router()

// метод пост для того чтобы создавать
router.post('/', typeController.create)
// метод гет для того чтобы получать
router.get('/', typeController.getAll) //передаем фун через контролеры 
module.exports = router
