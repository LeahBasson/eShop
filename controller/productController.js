import express from 'express'
import bodyParser from 'body-parser'
import { products } from '../model/index.js'  //importing the object that will be used.
import { verifyAToken } from '../middleware/AuthenticateUser.js'

const productRouter = express.Router()

productRouter.use(bodyParser.json())

productRouter.get('/', verifyAToken, (req, res) => {   //a middleware which is verifyAToken is placed between an endpoint and a callback function
    products.fetchProducts(req, res) 

})

productRouter.get('/recent', verifyAToken, (req, res) => {  
    products.recentProducts(req, res) 
})

productRouter.get ('/:id', verifyAToken, (req, res) => {
    products.fetchProduct(req, res)
})

productRouter.post('/add', verifyAToken, (req, res) => {
    products.addProduct(req, res)
})

productRouter.patch('/:id', verifyAToken, (req, res) => {
    products.updateProduct(req, res)
})

productRouter.delete('/:id', verifyAToken, (req, res) => {
    products.deleteProduct(req, res)
})

export {
    express,
    productRouter
}