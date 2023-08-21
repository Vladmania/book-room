const Router = require('express')
const router = new Router()
const fileMiddleware = require('../middleware/file')
const ProductControler = require('../controler/product_controler')
const UserController = require('../controler/user_controler')
const CartController = require('../controler/cart_controller')
const ReviewsController = require('../controler/reviews_controller')
const FavoritesController = require('../controler/favorite_controller')
const MiddlewareVerify = require('../middleware/verifaiToken')

router.post('/prod', ProductControler.addProduct)
router.get('/product', ProductControler.getProducts)
router.get('/oneproduct', ProductControler.getOneProduct)
router.delete('/deleteprod/:id', ProductControler.deleteProduct)
router.post('/changerating', ProductControler.changeRating)

router.post('/registration', UserController.registration)
router.post('/login', UserController.login)
router.post('/refresh', UserController.refreshToken)
router.post('/check',MiddlewareVerify.chekUserToken,UserController.checkUser)
router.put(
  '/editoruserphoto',
  fileMiddleware.single('avatar'),
  UserController.editorPhotoUser
)
router.put('/editordata',MiddlewareVerify.verifyToken ,UserController.editorDataUser)
router.put('/editorpassword',MiddlewareVerify.verifyToken ,UserController.editorPasswordUser)

router.post('/addcart', CartController.addProductInBacket)
router.post('/getcart', MiddlewareVerify.verifyToken,CartController.getCart)
router.delete('/delete/:id', CartController.removeProductFromCart)
router.put('/editcart', CartController.changeTheQuantityInTheCart)
router.delete('/shopping', CartController.shoppingProduct)

router.post('/sortproduct', ProductControler.sortProduct)
router.post('/search', ProductControler.searchQuery)

router.post('/addreviews', ReviewsController.addReviews)
router.get('/getreviews/:idProduct', ReviewsController.getReviews)

router.post('/addfavorites', FavoritesController.addProductInFavorite)
router.post('/getfavorites', MiddlewareVerify.verifyToken,FavoritesController.getFavorite)
router.delete('/deletefavorites/:id', FavoritesController.removeProductFromFavorites)

module.exports = router
