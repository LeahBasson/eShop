import express from 'express'
import path from 'path'
import { connection as db} from './config/index.js'

//Create an express app 
const app = express()
const port = +process.env.PORT || 4000
const router = express.Router()

//Middleware
app.use(router , express.static('./static'),
 express.json(), 
 express.urlencoded({
    extended:true
})
)

//Endpoint
router.get('^/$|/eShop', (req, res) => {
    res.status(200).sendFile(path.resolve('./static/html/index.html'))
})


router.get('/users', (req, res) => {
    try {
        const strQry = `SELECT firstName, lastName, age, emailAdd 
        FROM Users;`

        db.query(strQry, (err, results) => {
            if (err) throw new Error(err)
            res.json({
                status: res.statusCode,
                results
            })
        })
    }
     catch(e){
        res.json({
            status: 404,
            msg: e.message
        })
    }
})

//THIS DISPLAYS DATA ACCORDING TO ITS ID
router.get('/users/:id', (req, res) => {
    try{
        const stryQry = `
        SELECT userID, firstName, lastName, age, emailAdd
        FROM Users WHERE userID = ${req.params.id};`
        db.query(stryQry, (err, result) => {
            if(err) throw new Error('Issue when retrieving a user.')
                res.json({
               status: res.statusCode,
               result: result[0]
            })
        })
    } catch (e) {
        res.json({
            status: 404,
            msg:e.message
        })
    }
})

//If you looking for something that doesnt exist
router.get ('*', (req, res) => {
    res.json({
        status: 404,
        msg: 'Resource Not Found'
    })
})

//listen assigns a port number to a server
app.listen(port, () => {
    console.log(`Server is running on ${port}`);
})
