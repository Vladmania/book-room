const ConnectSequelize = require('../middleware/databaseСonnection')
const { DataTypes } = require('sequelize')

const Reviews = ConnectSequelize.define('Feedbacks', {
  prductId: {
    type: DataTypes.INTEGER
  },
  name: {
    type: DataTypes.TEXT
  },
  avatar: {
    type: DataTypes.TEXT
  },
  feedback: {
    type: DataTypes.TEXT
  },
  rating: {
    type: DataTypes.INTEGER
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE
  },
  updatedAt: {
    allowNull: false,
    type: DataTypes.DATE
  }
})

class ReviewsController {
  async addReviews(req, res){
    const {prductId, name, avatar, feedback, rating} = req.body
    await Reviews.create({
      prductId, 
      name, 
      avatar, 
      feedback,
      rating,
    })
    const reviews = await Reviews.findAll({
      where: { prductId },
    })
    res.json(reviews)
  }
  async getReviews(req, res){
    const prductId = req.params.idProduct
    const reviews = await Reviews.findAll({
      where: { prductId },
    })
    res.json(reviews)
  }
}

module.exports = new ReviewsController()
