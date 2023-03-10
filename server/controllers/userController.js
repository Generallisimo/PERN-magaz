// импорт нашего апиерор который мы сделали
const ApiError = require('../error/apiError')
// имп крипт для шифра 
const bcrypt = require('bcrypt')
// модели польз и корз
const {User, Basket} = require('../models/models')
// генерация токена для польз
const jwt = require('jsonwebtoken')
// создаем генерацию где будут передаваться в массив id email и role
const generateJwt = (id, email, role)=>{
    //первым параметром передается ключ основной,который хэшируется и  вторым секретный(ENV.), третье это опции - которые отвчеает токен(срок годности)
    return jwt.sign({id, email, role}, process.env.SECRET_KEY, {expiresIn:'24h'})
}
// создаем класс для группировки 
class UserController {
    // пишем фун-ии
    async registretion(req, res, next){
        // получаем из тела запроса и роль принимаем здесь так как она нигде не задается 
        const {email, password, role} = req.body
        //  проверка если поля пустые то вренем ошибку
        if(!email || !password){
            return next(ApiError.badRequest('Неккоректный email или password'))
        } 
        // создаем проверку на емаил есть ли такой участник
        const condidate = await User.findOne({where:{email}})
        if(condidate){
            return next(ApiError.badRequest('Пользователь уже существует'))
        }
        // хэшируем пароль
        const hashPassword = await bcrypt.hash(password, 5)//первым параметром пароль, а вторым кол-во раз хэширования
        // создаем пользователя
        const user = await User.create({email, role, password: hashPassword})
        const basket =  await Basket.create({userId: user.id})//создаем корзину из уже зарегестированого пользователя
        // создаем токен для пользователя 
         const token = generateJwt(user.id, user.email, user.role)
        return res.json(token)
    }
    async login(req, res, next){
        // вход
        const {email, password} = req.body 
        const user = await User.findOne({where: {email}})
        if(!user){
            return next(ApiError.internal("Пользователь не найден"))
        }
        // пишем проверку для пароля где вызываем фун крипт синхронизирующую данные с БД
        let comparePassword = bcrypt.compareSync(password, user.password)
        if(!comparePassword){
            return next(ApiError.internal("Пароль неверный"))
        }
        const token = generateJwt(user.id, user.email, user.role)
        return res.json(token)
    }
    async check(req, res, next){
        // генерируем и получаем токен
        const token = generateJwt(req.user.id, req.user.email, req.user.role)
        return res.json({token})   

        // проверка на ошибку
        // const {id} = req.query // проверяем запрос
        // осуществим проверку с мидлом которую сделали 
        // if (!id){//где id и есть тот err в мидле
            // return next(ApiError.badRequest('Не задано ID'))//вносим в агрумент наш apierror и вызываем нашу статик фун из класса и укз message
        // }
        // res.json(id) //так мы выведим из полученного адресса /auth?id=5&message=good массив с ключами и значниями то есть id и занчние
    }
}
// так мы сможем экспортировать и вызывать фун через точку нами созданные
module.exports = new UserController()