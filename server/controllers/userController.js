// импорт нашего апиерор который мы сделали
const ApiError = require('../error/apiError')
// создаем класс для группировки 
class UserController {
    // пишем фун-ии
    async registretion(req, res){

    }
    async login(req, res){
        
    }
    async check(req, res, next){
        // проверка на ошибку
        const {id} = req.query // проверяем запрос
        // осуществим проверку с мидлом которую сделали 
        if (!id){//где id и есть тот err в мидле
            return next(ApiError.badRequest('Не задано ID'))//вносим в агрумент наш apierror и вызываем нашу статик фун из класса и укз message
        }
        res.json(id) //так мы выведим из полученного адресса /auth?id=5&message=good массив с ключами и значниями то есть id и занчние
    }
}
// так мы сможем экспортировать и вызывать фун через точку нами созданные
module.exports = new UserController()