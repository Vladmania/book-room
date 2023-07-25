const ConnectSequelize = require('../middleware/databaseСonnection')
const { DataTypes } = require('sequelize')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const validator = require('validator')
const userServis = require('../servis/user_servis')
const { secret } = require('./config')
const { tokenLifetime } = require('./config')
const { refreshTokenLifetime } = require('./config')

const User = ConnectSequelize.define('Account', {
  email: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  password: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  name: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  photo: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  token: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  refreshToken: {
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
})

class UserController {
  async registration(req, res) {
    try {
      const { email, password } = req.body
      const emailValidity = validator.isEmail(email)
      if (emailValidity) {
        const condidat = await User.findOne({ where: { email: email } })
        if (condidat !== null) {
          res.json('User with this Email already exists')
        } else {
          const passwordHash = bcrypt.hashSync(password, 3)
          await User.create({
            email: email,
            password: passwordHash,
            name: '',
            photo: '',
            token: '',
            refreshToken: '',
          })
          const userprofil = await User.findOne({
            where: { email: email, password: passwordHash },
          })
           userServis.generirToken(userprofil)
          await userprofil.save()
          res.json([userprofil])
        }
      } else res.json('Email invalid')
    } catch (e) {
      console.log(e)
    }
  }
  async login(req, res) {
    try {
      const { email, password } = req.body
      const userprofil = await User.findOne({ where: { email: email } })
      if (!userprofil) {
        res.json('Invalid email')
      } else {
        const validPassword = bcrypt.compareSync(password, userprofil.password)
        if (!validPassword) {
          res.json('Invalid password')
        } else {
          userServis.generirToken(userprofil)
          await userprofil.save()
          console.log(userprofil);
          res.json([userprofil])
        }
      }
    } catch (e) {
      console.log(e)
    }
  }
  async checkUser(req, res) {
    try {
      const token = req.body.token
      const userprofil = await User.findAll({ where: { id: token.userId } })
      res.json(userprofil)
    } catch (e) {
      console.log(e)
    }
  }
  async refreshToken(req, res) {
    try {
      const token = req.headers.authorization.split(' ')[1]
      const decoded = jwt.decode(token, secret)
      const userprofil = await User.findOne({ where: { id: decoded.userId } })
      jwt.verify(userprofil.refreshToken, secret)
      userServis.generirToken(userprofil)
      await userprofil.save()
      res.json([userprofil])
    } catch (e) {
      console.log(e)
    }
  }
  async editorPhotoUser(req, res) {
    if (req.file) {
      const { id } = req.body
      const photo = req.file.path
      const userProfil = await User.findOne({
        where: {
          id,
        },
      })
      userProfil.photo = photo
      await userProfil.save()
      res.json([userProfil])
    }
  }
  async editorDataUser(req, res) {
    const { name, email, token } = req.body
    const userProfil = await User.findOne({
      where: {
        id: token.userId,
      },
    })
    userProfil.name = name
    userProfil.email = email
    await userProfil.save()
    res.json([userProfil])
  }
  async editorPasswordUser(req, res) {
    try {
      const { oldPassword, newPassword, token } = req.body
      const userProfil = await User.findOne({
        where: {
          id: token.userId,
        },
      })
      const validPassword = bcrypt.compareSync(oldPassword, userProfil.password)
      if (validPassword) {
        const passwordHash = bcrypt.hashSync(newPassword, 3)
        userProfil.password = passwordHash
        await userProfil.save()
        res.json([userProfil])
      }
    } catch (e) {
      console.log(e)
    }
  }
}

module.exports = new UserController()
