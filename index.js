const express = require('express')
require('dotenv').config()

const breadRoutes = require('./controllers/bread')

const app = express()

app.use('/breads', breadRoutes)


//http verbs/methods: get, post, put, patch, delete 

app.get('/', (req, res) => {
    res.send('<h1>Hello</h1>')
})

const PORT = process.env.PORT || 8080

app.listen(PORT, console.log(`listening on port ${PORT}`))

