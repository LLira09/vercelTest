const express = require('express')
const products = express.Router()

products.get('/', async (req, res) => {
    res.send('All Products')
})
products.get('/:id', async (req, res) => {
    res.send('Get Product by ID')
})



module.exports = products

