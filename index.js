import express from 'express'
import path from 'path'
import { connection as db} from './config/index.js'
import { createToken } from './middleware/AuthenticateUser.js'
import { hash } from 'bcrypt'
import bodyParser from 'body-parser'

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

router.use(bodyParser.json()), //to not call bodyParser on every endpoint, register once using 'router.use'

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

router.post('/register', async (req, res) => {
    try {
        let data = req.body
       
        data.pwd = await hash(data.pwd, 12 )  //if the salt is bigger than 15 characters it will take long to encrypt & decrypt
        //Payload
        let user = {
            emailAdd: data.emailAdd,
            pwd: data.pwd
        }
        let strQry = `
        INSERT INTO Users
        SET ? ;   
        `  // VALUES (?, ? , ?, ?)
        db.query(strQry, [data], (err) =>{
            if(err) {
                res.json({
                    status: res.statusCode,
                    msg: 'This email has already been taken'
                })
            } else{
                const token = createToken(user)
                res.json({
                    token,
                    msg: 'You are now registered'
                })
            }
        })
    } catch(e) {
        res.json({
            status: 400,
            msg: e.message //The error message from the if statement
    })
    }
    }
)

router.patch('/user/:id', async (req, res) => {
    try {
        let data = req.body
        if (data.pwd) {
            data.pwd = await hash (data.pwd, 12)
        }
        const strQry = `
        UPDATE Users
        SET ?
        WHERE userID = ${req.params.id}
        `  
        db.query (strQry, [data], (err) => {
            if (err) throw new Error ('Unable to update a user')
                res.json({
                    status: res.statusCode,
                    msg: 'The user record was updated.'
            })
        })
    } catch(e) {
        res.json({
            status: 400,
            msg: e.message //The error message from the if statement
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
