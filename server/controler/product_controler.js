const ConnectSequelize = require('../middleware/databaseСonnection')
const { DataTypes } = require('sequelize')
const { Op } = require("sequelize");

const Product = ConnectSequelize.define(
  'Products',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
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
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    rating: {
      type: DataTypes.NUMERIC,
      allowNull: false,
    },
    cover: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    status: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    paperback_price: {
      type: DataTypes.NUMERIC,
      allowNull: false,
    },
    hardcover_price: {
      type: DataTypes.NUMERIC,
      allowNull: false,
    },
    paperback_availability: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    hardcover_availability: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    genre: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
)

class ProductControler {
  async addProduct(req, res) {
    const {
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
    } = req.body
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
      updatedAt: new Date(),
    })
  }
  async getProducts(req, res) {
    try {
      const product = await Product.findAll()
      const { count, page, genre, minPrice, maxPrice, sort } = req.query
      console.log(count, page, genre, minPrice, maxPrice, sort );
      let array = []
      if(genre && minPrice && maxPrice){
        if(genre === "Business and finance"){
          const sortProd = await Product.findAll({
            where: {
              genre: "Business & finance",
              hardcover_price: {
                [Op.gte]: minPrice,
                [Op.lte]: maxPrice 
              },
            },
          })
          array = sortProd
        }else{
          const sortProd = await Product.findAll({
            where: {
              genre,
              hardcover_price: {
                [Op.gte]: minPrice,
                [Op.lte]: maxPrice 
              },
            },
          })
          array = sortProd
        }
      }else if(minPrice !== '0' || maxPrice !== '0'){
        const sortPrise = await Product.findAll({
          where: {
            hardcover_price: {
              [Op.gte]: minPrice,
              [Op.lte]: maxPrice 
            },
          },
        })
        array = sortPrise
      }else(
        array = product
      )
      if(sort){
        if (sort === 'Price') {
          const sortProductPrice = array.sort(
            (a, b) => a.hardcover_price - b.hardcover_price
          )
          array = sortProductPrice
        }else if(sort === 'oppositePrice'){
          const sortProductPrice = array.sort(
            (a, b) => b.hardcover_price - a.hardcover_price
          )
          array = sortProductPrice
        } else if (sort === 'Name') {
          const sortProductName = array.sort(function (a, b) {
            if (a.name > b.name) {
              return 1
            }
            if (a.name < b.name) {
              return -1
            }
            return 0
          })
          array = sortProductName
        } else if (sort === 'Author name') {
          const sortProductAuthorName = array.sort(function (a, b) {
            if (a.autor > b.autor) {
              return 1
            }
            if (a.autor < b.autor) {
              return -1
            }
            return 0
          })
          array = sortProductAuthorName
        } else if (sort === 'Rating') {
          const sortProductRating = array.sort(function (a, b) {
            if (a.rating < b.rating) {
              return 1
            }
            if (a.rating > b.rating) {
              return -1
            }
            return 0
          })
          array = sortProductRating
        } else if (sort === 'Date of issue') {
          const sortProductDateOfIssue = array.sort(
            (a, b) => a.createdAt - b.createdAt
          )
          array = sortProductDateOfIssue
        }
      }
      const allPrice = product
        .map((e) => Number(e.hardcover_price) || Number(e.paperback_price))
        let t = allPrice.reduce((a, b) => (a > b ? a : b))
      const dprod = array.slice(page * count, Number(count) * (Number(page) + 1))
      res.json({
        items: dprod.length === 0 ? array : dprod,
        totalProductCount: array.length,
        maxPrice: t,
      })
    } catch (e) {
      console.log(e)
    }
  }
  async getOneProduct(req, res) {
    const { id } = req.query
    const oneProduct = await Product.findOne({
      where: {
        id,
      },
    })

    res.json([oneProduct])
  }
  async deleteProduct(req, res) {
    const id = req.params.id
    const remoteProduct = await Product.destroy({
      where: {
        id,
      },
    })

    res.json(remoteProduct)
  }
  async sortProduct(req, res) {
    const { sort } = req.body
    const { count, page } = req.query
    const Products = await Product.findAll()
    if (sort === 'Price') {
      const sortProductPriceHardcover = Products.sort(
        (a, b) => a.hardcover_price - b.hardcover_price
      )
      const paginalСonclusion = sortProductPriceHardcover.slice(
        page * count,
        Number(count) * (Number(page) + 1)
      )
      res.json(paginalСonclusion.length === 0 ? Products : paginalСonclusion)
    } else if (sort === 'Name') {
      const sortProductPriceHardcover = Products.sort(function (a, b) {
        if (a.name > b.name) {
          return 1
        }
        if (a.name < b.name) {
          return -1
        }
        return 0
      })
      const paginalСonclusion = sortProductPriceHardcover.slice(
        page * count,
        Number(count) * (Number(page) + 1)
      )
      res.json(paginalСonclusion.length === 0 ? Products : paginalСonclusion)
    } else if (sort === 'Author name') {
      const sortProductPriceHardcover = Products.sort(function (a, b) {
        if (a.autor > b.autor) {
          return 1
        }
        if (a.autor < b.autor) {
          return -1
        }
        return 0
      })
      const paginalСonclusion = sortProductPriceHardcover.slice(
        page * count,
        Number(count) * (Number(page) + 1)
      )
      res.json(paginalСonclusion.length === 0 ? Products : paginalСonclusion)
    } else if (sort === 'Rating') {
      const sortProductPriceHardcover = Products.sort(function (a, b) {
        if (a.rating < b.rating) {
          return 1
        }
        if (a.rating > b.rating) {
          return -1
        }
        return 0
      })
      const paginalСonclusion = sortProductPriceHardcover.slice(
        page * count,
        Number(count) * (Number(page) + 1)
      )
      res.json(paginalСonclusion.length === 0 ? Products : paginalСonclusion)
    } else if (sort === 'Date of issue') {
      const sortProductPriceHardcover = Products.sort(
        (a, b) => a.createdAt - b.createdAt
      )
      const paginalСonclusion = sortProductPriceHardcover.slice(
        page * count,
        Number(count) * (Number(page) + 1)
      )
      res.json(paginalСonclusion.length === 0 ? Products : paginalСonclusion)
    }
  }
  async changeRating(req, res) {
    const { id, rating } = req.body
    const changeProduct = await Product.findOne({
      where: { id },
    })
    changeProduct.rating = rating
    await changeProduct.save()
    res.json(changeProduct)
  }
  async searchQuery(req, res) {
    const { query } = req.body
    const changeProduct = await Product.findAll()
    const respons = changeProduct.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    )
    res.json(respons)
  }
}

module.exports = new ProductControler()
