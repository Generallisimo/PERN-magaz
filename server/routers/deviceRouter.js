const Router = require('express')
const router = new Router()
router.post('/')
router.get('/')
// для получения одного конкретного дейвайса
router.get('/:id')
module.exports = router
