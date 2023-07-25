const {secret} = require("../controler/config")
const jwt = require('jsonwebtoken')

class MiddlewareVerify {
    async verifyToken(req, res, next) {
        const token = req.headers.authorization.split(' ')[1]
        try{
            const decoded = jwt.verify(token, secret)
            req.body.token = decoded
            next()
        }catch(e){
            console.log(e);
        }
         
      }
      async chekUserToken(req, res, next) {
        const token = req.headers.authorization.split(' ')[1]
        try{
            const decoded = jwt.verify(token, secret)
            req.body.token = decoded
            next()
        }catch(e){
            res.json('token is not alive')
        }
         
      }
      }

module.exports = new MiddlewareVerify()