const { Router } = require("express")
const router = Router()
const controller = require("../controllers/controller")

router.post('/post', controller.Create)
router.get('/post', controller.Read)
router.get('/post/:id', controller.ReadOne)
router.put('/post/:id', controller.Update)
router.delete('/post/:id', controller.Delete)

module.exports = router