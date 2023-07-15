const ConnectSequelize = require('../middleware/databaseСonnection')
const { DataTypes } = require('sequelize')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const validator = require('validator')
const { secret } = require('./config')
const { tokenLifetime } = require('./config')

const User = ConnectSequelize.define('UserProfils', {
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
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
})

const generetToken = (userId, email) => {
  const payload = {
    userId,
    email,
  }
  return jwt.sign(payload, secret, { expiresIn: tokenLifetime })
}

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
          })
          const userprofil = await User.findAll({
            where: { email: email, password: passwordHash },
          })

          res.json(userprofil)
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
          const token = generetToken(userprofil.id, userprofil.email)
          userprofil.token = token
          await userprofil.save()
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
