const {Brand} = require('../models/models') // обращаемся к БД
// создаем класс для группировки 
class BrandController {
    // пишем фун-ии
    async create(req, res){//позволит создать типы
        // извлекаем название этого типа из его тела(body)
        const{name}=req.body
        // затем создаем это тело
        const brand = await Brand.create({name}) // ассинхронная фун для создания и укз что создаем(поля) id будет присвоен в данном случае автоматчисеки
        return res.json(brand)//выводим полученное

    }
    async getAll(req, res){//будет возвращать
        const brands = await Brand.findAll()//будет возвращать все
        return res.json(brands)//выводим ассинхрон
    }
}
// так мы сможем экспортировать и вызывать фун через точку нами созданные
module.exports = new BrandController()