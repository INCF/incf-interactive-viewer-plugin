
const express = require('express')
const path = require('path')
const app = express()

app.use((_req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'localhost')
  next()
})

app.use(express.static(path.join(__dirname, 'public')))

const PORT = process.env.PORT || 3001

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))
