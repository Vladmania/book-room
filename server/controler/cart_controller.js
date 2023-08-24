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
    try{
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
    }catch(e){
      console.log(e);
    }
    
  }
  async getCart(req, res){
  try{
    const token = req.body.token
    const ProductsInCart = await ProductInCart.findAll({
      where: {
        userId: token.userId
      }
  })
  res.json(ProductsInCart)
  }catch(e){
      console.log(e);
  }
    
  }
  async removeProductFromCart(req, res){
    try{
      const id = req.params.id
    const remoteProduct = await ProductInCart.destroy({
      where: {
        id
      }
  })
  res.json(remoteProduct)
    }catch(e){
      console.log(e);
    }
  }
  async shoppingProduct(req, res){
    try{
      const shoppingProductFromCart = await ProductInCart.truncate();
      res.json(shoppingProductFromCart)
    }catch(e){
      console.log(e);
    }
  }
  async changeTheQuantityInTheCart(req, res){
    try{
      const {id, quantity} = req.body
    const changeProduct = await ProductInCart.findOne({
      where: {
        id
      } 
  })
  changeProduct.quantity = quantity
  await changeProduct.save()
  res.json(changeProduct)
    }catch(e){
      console.log(e);
    }
  }
}

module.exports = new CartController()
