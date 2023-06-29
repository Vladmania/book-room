const ConnectSequelize = require('../middleware/databaseСonnection')
const { DataTypes } = require('sequelize')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { secret } = require('./config')

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
  return jwt.sign(payload, secret, { expiresIn: '10h' })
}

class UserController {
  async registration(req, res) {
    const { email, password } = req.body
    const condidat = await User.findOne({ where: { email: email } })
    if (condidat !== null) {
      return res
        .status(400)
        .json({ message: 'Пользователь с таким Email уже существует' })
    } else {
      const passwordHash = bcrypt.hashSync(password, 3)
      await User.create({
        email: email,
        password: passwordHash,
        name: '',
        photo: '',
        token: ''
      })
      const userprofil = await User.findAll({
        where: { email: email, password: passwordHash},
      })
      if(userprofil){
        const token = generetToken(
          userprofil.id,
          userprofil.email,
        )
        userprofil.token = token
        await userprofil.save()
        
        res.json(userprofil)
      }
      
    }
  }
  async login(req, res) {
    const { email, password } = req.body
    const userprofil = await User.findOne({ where: { email: email } })
    if (!userprofil) {
      res.json(null)
    } else {
      const validPassword = bcrypt.compareSync(password, userprofil.password)
      if (!validPassword) {
        res.json(null)
      } else {
        const token = generetToken(
          userprofil.id,
          userprofil.email,
        )
        userprofil.token = token
        await userprofil.save()
        res.json([userprofil])
      }
    }
  }
  async checkUser(req, res){
    const { token } = req.body
    const decoded = jwt.verify(token, secret);
    const userprofil = await User.findAll({ where: { id: decoded.userId } })
    if(decoded){
      res.json(userprofil)
    }else{res.json([])}
  }
  async getUsers(req, res) {
    const prod = await User.findAll()
    res.json(prod)
  }
  async getZapr(req, res) {
    const userprofil = await User.findAll()
      res.json(userprofil)
  }
  async editorDataUserPhoto(req, res){
    if(req.file){
        const {id} = req.body
        const photo = req.file.path
        const userProfil = await User.findOne({
          where: {
            id
          } 
      })
      userProfil.photo = photo
      await userProfil.save()
        res.json(userProfil)
    }
}
}

module.exports = new UserController()
