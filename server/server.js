const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 5000
const path = require('path')
const router = require('./router/router')

app.use(
  cors({
    origin: ['null', 'http://localhost:3000'],
  })
)

app.use(express.json())
app.use('/images', express.static(path.join(__dirname, '/images')))
app.use('/api', router)

const start = () => {
  try {
    app.listen(PORT, () => {
      console.log('сервер запущен на порту', PORT)
    })
  } catch (e) {
    console.log(e)
  }
}

start()
