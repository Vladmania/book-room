const ConnectSequelize = require("../middleware/databaseСonnection")
const { DataTypes } = require('sequelize');

const Product = ConnectSequelize.define("Products", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    autor: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    rating: {
        type: DataTypes.NUMERIC,
        allowNull: false
    },
    cover: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    status: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    paperback_price:{
        type: DataTypes.NUMERIC,
        allowNull: false
    },
    hardcover_price: {
        type: DataTypes.NUMERIC,
        allowNull: false
    },
    paperback_availability:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    hardcover_availability: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    genre: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    createdAt:{
        type: DataTypes.DATE,
        allowNull: false
    } ,
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false
        }
  },{
    timestamps: false,
})


class ProductControler {
    async addProduct(req, res){
        const {id,
            name,
            autor,
            description,
            rating,
            cover,
            status,
            paperback_price,
            hardcover_price,
            paperback_availability,
            hardcover_availability,
            genre,} = req.body
       await Product.create({
            id,
            name,
            autor,
            description,
            rating,
            cover,
            status,
            paperback_price,
            hardcover_price,
            paperback_availability,
            hardcover_availability,
            genre,
            createdAt: new Date(),
            updatedAt: new Date()
        })
    }
    async getProduct(req, res){
       const prod = await Product.findAll()
       res.json(prod)
    }
    async deleteProduct(req, res){
        const id = req.params.id
        const remoteProduct = await Product.destroy({
          where: {
            id
          }
      })
      
      res.json(remoteProduct)
      }
}

module.exports = new  ProductControler()


