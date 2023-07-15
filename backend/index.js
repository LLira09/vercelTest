const express = require('express')
const mongoose = require('mongoose')

require('dotenv').config()
const PORT = process.env.PORT
const app = express()

// mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true },
//     () => { console.log('connected to mongo: ', process.env.MONGO_URI) }
// )
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoDB Connected: ${conn.connection.host}`)
    } catch (error) {
        console.log(`Error: ${error.message}`)
        process.exit(1)
    }
}
connectDB()

app.get('/', (req, res) => {
    res.send('Welcome to the Vercel Test app')
})

const productsController = require('./controllers/productController.js')
app.use('/products', productsController)

app.listen(PORT, () => {
    console.log('listening on port', PORT)
})