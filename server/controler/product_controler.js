const ConnectSequelize = require('../middleware/databaseСonnection')
const { DataTypes } = require('sequelize')

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
  async getProduct(req, res) {
    const prod = await Product.findAll()
    const { count, page } = req.query
    const allPrice = prod.map(
      (e) => Number(e.hardcover_price) || Number(e.paperback_price)
    )
    const maxPrice = allPrice.reduce((a, b) => (a > b ? a : b))
    const dprod = prod.slice(page * count, Number(count) * (Number(page) + 1))
    res.json({
      items: dprod.length === 0 ? prod : dprod,
      totalProductCount: prod.length,
      maxPrice,
    })
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
  async sortGenr(req, res) {
    const { genre } = req.body
    const { count, page } = req.query
    const sortProduct = await Product.findAll({
      where: {
        genre,
      },
    })
    const pagesProduct = sortProduct.slice(
      page * count,
      Number(count) * (Number(page) + 1)
    )
    const sortGanre = pagesProduct.length === 0 ? pagesProduct : sortProduct
    res.json(sortGanre)
  }
  async sortPrice(req, res) {
    const { minPrice, maxPrice } = req.body
    const Products = await Product.findAll()
    const sortProductPriceHardcover = Products.filter(
      (prod) =>
        prod.hardcover_price >= minPrice && prod.hardcover_price <= maxPrice
    )
    res.json(sortProductPriceHardcover)
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
      }
      )
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
      where: { id }
    })
    changeProduct.rating = rating
    await changeProduct.save()
    res.json(changeProduct)
  }
}

module.exports = new ProductControler()
