import { userRouter, express } from './controller/userController.js'
import { productRouter  } from './controller/productController.js'
import path from 'path'


//Create an express app 
const app = express()
const port = +process.env.PORT || 4000

//Middleware - Middleware is software that lies between an operating system and the applications running on it. 
app.use('/user', userRouter) //to get all the endpoints  //Brackets to parse a string
app.use('/product' , productRouter)

app.use(
 express.static('./static'),
 express.json(), 
 express.urlencoded({
    extended:true
}))

//Endpoint // the get endpoint allows you to retrieve something
app.get('^/$|/eShop', (req, res) => {
    res.status(200).sendFile(path.resolve('./static/html/index.html'))
})

//If you looking for something that doesnt exist
app.get ('*', (req, res) => {
    res.json({
        status: 404,
        msg: 'Resource Not Found'
    })
})

//listen assigns a port number to a server
app.listen(port, () => {
    console.log(`Server is running on ${port}`);
})
