const jwt = require("jsonwebtoken")

// здесь мы будем декодировать токен и проверять на валидность 
module.exports = function (req, res, next){
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
        req.user = decode//получаем токен
        next()//теперь user везде доступен
    }catch(e){
        // возвращаем ошибку и сообщение
         res.status(401).json({message:"Пользователь не авторизирован"})
    }
}