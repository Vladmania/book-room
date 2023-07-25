const jwt = require('jsonwebtoken')
const { secret } = require('../controler/config')
const { tokenLifetime } = require('../controler/config')
const { refreshTokenLifetime } = require('../controler/config')

const generetToken = (userId, email) => {
    const payload = {
      userId,
      email,
    }
    const token = jwt.sign(payload, secret, { expiresIn: tokenLifetime })
    const refreshToken = jwt.sign(payload, secret, {
      expiresIn: refreshTokenLifetime,
    })
    return { token, refreshToken }
  }

class UserServis {
    async generirToken(profil){
        const token = generetToken(profil.id, profil.email)
        profil.token = token.token
        profil.refreshToken = token.refreshToken
        return profil
    }
}

module.exports = new UserServis()