const ConnectSequelize = require('../middleware/databaseСonnection')
const { DataTypes } = require('sequelize')
const jwt = require('jsonwebtoken')
const { secret } = require('./config')

const ProductInCart = ConnectSequelize.define('ProductfromCarts', {
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  productId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  name: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  autor: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  cover: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  price: {
    type: DataTypes.NUMERIC,
    allowNull: false,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
})

class CartController {
  async addProductInBacket(req, res) {
    const { userId, productId, name, autor, cover, price, quantity } = req.body
    await ProductInCart.create({
        userId,
        productId,
        name, 
        autor, 
        cover, 
        price, 
        quantity
    })
    const cartUser = await ProductInCart.findAll({
        where: {
             userId
        }
    })
    res.json(cartUser)
  }
  async getCart(req, res){
    const { token } = req.body
    const decoded = jwt.verify(token, secret);
    const ProductsInCart = await ProductInCart.findAll({
      where: {
        userId: decoded.userId
      }
  })
  res.json(ProductsInCart)
  }
  async removeProductFromCart(req, res){
    const id = req.params.id
    const remoteProduct = await ProductInCart.destroy({
      where: {
        id
      }
  })
  
  res.json(remoteProduct)
  }
  async changeTheQuantityInTheCart(req, res){
    const {id, quantity} = req.body
    const changeProduct = await ProductInCart.findOne({
      where: {
        id
      } 
  })
  changeProduct.quantity = quantity
  await changeProduct.save()
  res.json(changeProduct)
  }
}

module.exports = new CartController()
