// проверка что добавление нового устройства именно админом
const jwt = require("jsonwebtoken")

// получаем роль таким образом польз
module.exports = function(role){
    return function (req, res, next){
        if(req.method === 'OPTIONS'){
            next()
        }
        // нам интересно только методы CRUD
        try{
            // токен помещают обычно в header autoregis 
            const token = req.headers.authorization.split(' ')[1]//обычно его помещают так Bearer asfaarqr13xcv2 
            if(!token){
                return res.status(401).json({message:"Пользователь не авторизирован"})    
            }
            // проверяем на валидность
            const decode = jwt.verify(token, process.env.SECRET_KEY)//передаем сам токен и потом секретный ключ
            // проверка если не совпадают роли
            if(decode.role !== role){
                return res.status(401).json({message:"Нет доступа"}) 
            }
            req.user = decode//получаем токен
            next()//теперь user везде доступен
        }catch(e){
            // возвращаем ошибку и сообщение
             res.status(401).json({message:"Пользователь не авторизирован"})
        }
    } 
}
