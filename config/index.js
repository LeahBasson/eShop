import { createPool } from "mysql2";
import 'dotenv/config'
config()
let connection = createPool ({
    host: process.env.hostDB,
    user: process.env.userDb,
    password: process.env.pwDb,
    database: process.env.dbName,
    multipleStatements: true,
    connectionLimit: 30 //when above 5 you will get an error
})
 connection.on('connection', (err) => {
    if(err) throw new Error ('Couldn\'t connect to the database, please try again later')
 })
export{
    connection
}