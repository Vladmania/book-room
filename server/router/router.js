const Router = require('express')
const router = new Router()
const ProductControler = require('../controler/product_controler')
const UserController = require('../controler/user_controler')
const CartController = require("../controler/bascet_controller")

router.post('/prod', ProductControler.addProduct)
router.get('/product', ProductControler.getProduct)
router.delete('/deleteprod/:id', ProductControler.deleteProduct)

router.post('/registration', UserController.registration)
router.post('/login', UserController.login)
router.post('/check', UserController.checkUser)
router.get("/users", UserController.getUsers)
router.get("/us", UserController.getZapr)

router.post('/addcart', CartController.addProductInBacket)
router.delete('/delete/:id', CartController.removeProductFromCart)


module.exports = router
