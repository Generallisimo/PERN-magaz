const Router = require('express')
const brandController = require('../controllers/brandController')
const router = new Router()

// метод пост для того чтобы создавать
router.post('/', brandController.create)
// метод гет для того чтобы получать
router.get('/', brandController.getAll)

module.exports = router
