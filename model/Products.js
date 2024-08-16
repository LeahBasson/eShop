import { connection as db} from '../config/index.js'

class Products {
    fetchProducts(req, res) {
        try {           //try statement is used to handle errors
            const strQry = `SELECT productID, prodName, category, prodDescription, prodURL, amount
            FROM Products;
            `
    
            db.query(strQry, (err, results) => {
                if (err) throw new Error('Unable to fetch all products')
                res.json({
                    status: res.statusCode,
                    results //creates a key and assigns a value to it 
                })
            })
        }
         catch(e){
            res.json({
                status: 404,
                msg: e.message
            })
        }
    }

    recentProducts(req, res) {
        try{
            const strQry = `
            SELECT productID, prodName, category, prodDescription, prodURL, amount
            FROM Products
            ORDER BY productID DESC
            LIMIT 5; 
            `

            db.query(strQry, (err, results) => {
                if (err) throw new Error('Unable to retrieve recent products')
                res.json({
                    status: res.statusCode,
                    results
            })
            })
        } catch(e) {
            res.json({
                status: 404,
                msg: e.message
            })
        }
    }

    fetchProduct(req, res) {
            try{
                const stryQry = `
                SELECT productID, prodName, category, prodDescription, prodURL, amount
                FROM Products WHERE productID = ${req.params.id};`
                db.query(stryQry, (err, result) => {
                    if(err) throw new Error('Issue when retrieving a user.')
                        res.json({
                       status: res.statusCode,
                       result: result[0]  //result for a single product 
                    })
                })
            } catch (e) {
                res.json({
                    status: 404,
                    msg:e.message
                })
            }
    }

    addProduct(req, res) {
        try {  
            const strQry = `
            INSERT INTO Products
            SET ? ;   
            `  // or you can use this VALUES (?, ? , ?, ?)
            db.query(strQry, [req.body], (err) =>{
                if(err) throw new Error ('Unable to add a new product')
                    res.json({
                        status: res.statusCode,
                        msg: 'Product was added'
                    })
        })
        
        } catch(e) {
            res.json({
                status: 400, // Mistake on the clients side (Maybe syntax error)
                msg: e.message //The error message from the if statement
        })
        }
    }
    
    updateProduct(req, res) {
        try {
            const strQry = `
            UPDATE Products
            SET ?
            WHERE productID = ${req.params.id}
            `  
            db.query (strQry, [req.body], (err) => {
                if (err) throw new Error ('Unable to update a product')
                    res.json({
                        status: res.statusCode,
                        msg: 'Product was updated.'
                })
            })
        } catch(e) {
            res.json({
                status: 400,
                msg: e.message //The error message from the if statement
        })
        }
    }

    deleteProduct(req, res) {
        try{
            const strQry = `
            DELETE FROM Products
            WHERE productID = ${req.params.id};
            `
            db.query (strQry, (err) => {
                if(err) throw new Error('To delete a product, please review your delete query.')
                    res.json({
                        status: res.statusCode,
                        msg: 'A product was removed.'
                })
            })
        } catch(e) {
            res.json({
                status: 404, //Resource not found
                msg: e.message
            })
        }
    }
 }

 export {
    Products
 }