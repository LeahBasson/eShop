import { json } from 'body-parser'
import 'dotenv/config'
import jwt from 'jsonwebtoken'
const { sign, verify } = jwt
function createToken(user) {
    return sign(
        {
            emailAdd: user.emailAdd,
            pwd:user.pwd
        },
        process.env.SECRET_KEY,
        {
            expiresIn:'1h'
        }
    )
}

//It will grab token and secret key and check if its correct
function verifyAToken(req, res, next) {  //how you know its a middleware is because there is next
    const toke = req?.headers["authorization"]  //creating a variable called token / header is where you save token
    if (token) {
        if (verify(token, process.env.SECRET_KEY)) { //token and secret key is passed here
            next()
        } else {
            res?.json({
                status: res.statusCode,
                msg: "Please provide the correct credentials."
            })
        }
    } else {
        res?.json({
            status: res.statusCode,
            msg: "Please login."
        })
    }
}
export {
    createToken
}