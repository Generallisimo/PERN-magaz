// импорт генератора
const uuid = require('uuid')
// импорт фун для указания пути который есть в node.js
const path = require('path')
// создаем класс для группировки 
const {Device, DeviceInfo} = require('../models/models')
// ошибки имп
const ApiError = require('../error/apiError')
class deviceController {
    // пишем фун-ии
    async create(req, res, next){
        // фун для проверки на ошибки
        try{
        // получ данные из массива имя прайс бранд и тип  id инфа 
        let {name, price, brandId, typeId, info} = req.body
        // картинку выводи, нужен для этого файд
        const {img} = req.files
        // создаем перем с генерацией
        let fileName = uuid.v4() + ".jpg" // генерация и в конце расширение 
        // переносим полученный файл в папку static чтобы сервер в дальнейшем работал с ней
        img.mv(path.resolve(__dirname, '..', 'static', fileName))//mv перенос и path.resolve для адаптива к опереценной системе, dir для того чтобы оказать сразу в пути для где мы работаем дальше выходим и сам файл
        const device = await Device.create({name, price, brandId, typeId, img: fileName})//созд сам девайс

        // проверем если у нас есть info в теле запроса
        if(info){
            // если передавать какие-то данные через FormData то они приходят в строке
            info = JSON.parse(info)//поэтому мы выводим их на  фронте в jsin а на бэке обратно в объекты
            // после того как получили массив проходимся по каждому элементу
            info.forEach(i => 
                // создаем элемент
                DeviceInfo.create({
                    // переносим его в 
                    title: i.title,
                    description: i.description,
                    deviceId: device.id,
                })
            )
        }

        return res.json(device)
        }catch(e){
            // вызываем ошибку при неудаче
            next(ApiError.badRequest(e.message))
        }

    }
    async getAll(req, res){
        // добавим вывод на стр limit - кол-во и page - стр
        let {brandId, typeId, limit, page} =req.query //из строки запроса
        // укз дефолт значения, если не укз лимит или стр то выводим так
        page = page || 1
        limit = limit || 9
        let offset = page*limit-limit
        let devices; 
        // проверки
        if (!brandId && !typeId){
            //  обращ к БД findAndCountAll - она покажет сколько у нас всего товаров(массивов) и выведет товары с двемя пермеными одна кол другая что на стр  
            devices = await Device.findAndCountAll({limit, offset})//проходимся по всем объектам и добавляем наши опции для вывода товара
        }
        if (brandId && !typeId){
            devices = await Device.findAndCountAll({where:{brandId, limit, offset}})//вызываем опции где укз что задано
        }
        if (!brandId && typeId){
            devices = await Device.findAndCountAll({where:{typeId,limit, offset}})
        }
        if (brandId && typeId){
            devices = await Device.findAndCountAll({where:{brandId, typeId, limit, offset}}) 
        }
        // возращ массив этих девайсов
        return res.json(devices)
    }
    // для получения одного девайса
    async getOne(req, res){
        const {id} = req.params//получаем его из параметров который мы указывали в роутере
        const device = await Device.findOne({//ищем по Device
            // передаем что искать
            where:{id},
            // нужно подгрузить информацию сразу так как мы открываем детальную информацию
            include:[{model:DeviceInfo, as:'info'}]//передаем модель внутерь DeviceInfo и название поля которое будет в этом объекте
        })
        return res.json(device)
    }
}
// так мы сможем экспортировать и вызывать фун через точку нами созданные
module.exports = new deviceController()