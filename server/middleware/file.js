const multer = require("multer")

const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, "images/")
    },
    filename: (req, file, cb) =>{
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, uniqueSuffix + '-' + file.originalname)
    }
})

module.exports = multer({storage: storage})