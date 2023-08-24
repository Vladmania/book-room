const ConnectSequelize = require("../middleware/databaseСonnection");
const { DataTypes } = require("sequelize");

const ProductinFavorites = ConnectSequelize.define("ProductfromFavorites", {
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
});

class FavoriteController {
  async addProductInFavorite(req, res) {
    try {
      const { userId, productId, name, autor, cover, price } = req.body;
      await ProductinFavorites.create({
        userId,
        productId,
        name,
        autor,
        cover,
        price,
      });
      const cartUser = await ProductinFavorites.findAll({
        where: {
          userId,
        },
      });
      res.json(cartUser);
    } catch (e) {
      console.log(e);
    }
  }
  async getFavorite(req, res) {
    try {
      const token = req.body.token;
      const ProductsInFavorite = await ProductinFavorites.findAll({
        where: {
          userId: token.userId,
        },
      });
      res.json(ProductsInFavorite);
    } catch (e) {
      console.log(e);
    }
  }
  async removeProductFromFavorites(req, res) {
    try {
      const id = req.params.id;
      const remoteProduct = await ProductinFavorites.destroy({
        where: {
          productId: id,
        },
      });
      res.json(remoteProduct);
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = new FavoriteController();
