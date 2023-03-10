const Router = require('express')
const deviceController = require('../controllers/deviceController')
const router = new Router()

router.post('/', deviceController.create)
router.get('/', deviceController.getAll)
// для получения одного конкретного дейвайса
router.get('/:id', deviceController.getOne)

module.exports = router
