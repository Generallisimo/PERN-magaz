// проверка на ошибку если не получаем нужный нам ключ будем выводить ключ
class ApiError extends Error{ //клас будет расширять Error
    // принимаем статус код ошибки и сообщение
    constructor(status, message){
        // родительский конструктор с фун super
        super();
        // присваем то, что получаем параметрами
        this.status = status;
        this.message = message;
    }
    // созд стат фун которые можно вызват без объекта то есть обращ к классу
    static badRequest(message){
        // возвращаем ошибку и сообщение полученное   
        return new ApiError(404, message);
    }
    static internal(message){
        // возвращаем ошибку и сообщение полученное   
        return new (500, message);
    }
    static forbidden(message){
        // возвращаем ошибку и сообщение полученное   
        return new (403, message);
    }
}
module.exports = ApiError