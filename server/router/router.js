const Router = require('express')
const router = new Router()
const fileMiddleware = require('../middleware/file')
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
router.put("/editoruserphoto",fileMiddleware.single('photo'), UserController.editorDataUserPhoto)

router.post('/addcart', CartController.addProductInBacket)
router.post('/getcart', CartController.getCart)
router.delete('/delete/:id', CartController.removeProductFromCart)
router.put('/editcart', CartController.changeTheQuantityInTheCart)

router.post('/sortgenre', ProductControler.sortGenr)
router.post('/sortprice', ProductControler.sortPrice)
router.post('/sortproduct', ProductControler.sortProduct)

module.exports = router
