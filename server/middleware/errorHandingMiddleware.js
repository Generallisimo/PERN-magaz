// создаем мидл для проверки до сервера
const ApiError = require('../error/apiError') //импорт нашего класса для ошибки
// созд и экспорт фун этого мидла
module.exports = function(err, req, res, next){ // ошибки запрос ответ и нест которая передаст след мидлу запрос
    // проверка  instanceof проверяет принадлежность
    if (err instanceof ApiError){
        // res - ответ (err - статус полученной ошибки)
        return res.status(err.status).json({message: err.message}) // status - номер ошибки то выводим для читаемости через json наше сообещние которое вставим
    }
    // если ошибка не инсталсампидиерор то мы выведим 500 ошибку и сообщение
    return res.status(500).json({message: 'Непредвиденная ошибка'})
}