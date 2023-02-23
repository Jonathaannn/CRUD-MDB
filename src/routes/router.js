const { Router } = require("express")
const router = Router()
const controller = require("../controllers/controller")

router.post('/post', controller.Create)
router.get('/', controller.Read)
router.get('/post', controller.ReadOne)
router.put('/post', controller.Update)
router.delete('/post', controller.Delete)

module.exports = router