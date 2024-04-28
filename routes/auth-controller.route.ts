import { validationResult } from 'express-validator';
import mysql from 'mysql2'


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'findme',
    password: 'kafpliz'
})

connection.connect((err) => {
    if (err) {
        return console.error("Ошибка: " + err.message);
    } else {
        console.log('Connected... cont')
    }
})


class AuthControllerRoute {
    async regestration(req:any, res:any){
        try {
            const errors = validationResult(req)
            if(!errors.isEmpty()){
                return res.status(400).json({mes:'Ошибка при регистрации', errors})
            }
            const {username, email, password} = req.body
            const candidate = connection.execute('select * from users where firstName like "Bob"', (err, result, fields)=> {
                if(result){
                    res.send(result)
                } else{
                    res.send(result)
                }
            })
            console.log(candidate);
            

        } catch (error) {
            console.log(error);
            res.status(400).json({mes: "ошибка при регистрации", 'error': error})
            
        }

    }

}

let controller = new AuthControllerRoute()


export {controller}


