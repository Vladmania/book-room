const {secret} = require("../controler/config")
const jwt = require('jsonwebtoken')

class MiddlewareVerify {
    async verifyToken(req, res, next) {
        try{
            const token = req.headers.authorization.split(' ')[1]
            const decoded = jwt.verify(token, secret)
            req.body.token = decoded
            next()
        }catch(e){
            console.log(e);
        }
         
      }}

module.exports = new MiddlewareVerify()