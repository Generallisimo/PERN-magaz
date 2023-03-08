// доб в бд объекты
const {Type} = require('../models/models') //
const ApiError = require('../error/apiError')
// создаем класс для группировки 
class TypeController {
    // пишем фун-ии
    async create(req, res){
        // извлекаем название этого типа из его тела(body)
        const{name}=req.body
        // затем создаем это тело
        const type = await Type.create({name}) // ассинхронная фун для создания и укз что создаем(поля) id будет присвоен в данном случае автоматчисеки
        return res.json(type)//выводим полученное

    }
    async getAll(req, res){
        
    }
}
// так мы сможем экспортировать и вызывать фун через точку нами созданные
module.exports = new TypeController()