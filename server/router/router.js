const Router = require('express')
const router = new Router()
const fileMiddleware = require('../middleware/file')
const ProductControler = require('../controler/product_controler')
const UserController = require('../controler/user_controler')
const CartController = require('../controler/bascet_controller')
const ReviewsController = require('../controler/reviews_controller')

router.post('/prod', ProductControler.addProduct)
router.get('/product', ProductControler.getProducts)
router.get('/oneproduct', ProductControler.getOneProduct)
router.delete('/deleteprod/:id', ProductControler.deleteProduct)
router.post('/changerating', ProductControler.changeRating)

router.post('/registration', UserController.registration)
router.post('/login', UserController.login)
router.post('/check', UserController.checkUser)
router.put(
  '/editoruserphoto',
  fileMiddleware.single('avatar'),
  UserController.editorPhotoUser
)
router.put('/editordata', UserController.editorDataUser)
router.put('/editorpassword', UserController.editorPasswordUser)

router.post('/addcart', CartController.addProductInBacket)
router.post('/getcart', CartController.getCart)
router.delete('/delete/:id', CartController.removeProductFromCart)
router.put('/editcart', CartController.changeTheQuantityInTheCart)

router.post('/sortgenre', ProductControler.sortGenr)
router.post('/sortprice', ProductControler.sortPrice)
router.post('/sortproduct', ProductControler.sortProduct)
router.post('/search', ProductControler.searchQuery)

router.post('/addreviews', ReviewsController.addReviews)
router.get('/getreviews/:idProduct', ReviewsController.getReviews)

module.exports = router
