// соеденяем бэк и фронт
import axios from "axios"

// два инстанса т.е. экземпляры которые будут работать для соед
const $host = axios.create({
    // url на которые будут отправляться запросы где мы укз в env
    baseURL: process.env.REACT_APP_API_HOST
})
// автоматически будет подставляться хедр авторизейшен с токеном
const $AuhHost = axios.create({
    baseURL: process.env.REACT_APP_API_HOST
})
// для второго инстанса нам нужно подств токен для этого сущ интерцепторы которые принимают в себя параметр конфиг
const authInterceptor = config =>{
    // укз хедерс авторизейшена с баерар как в случаес с постман делали
    config.headers.authorization= `Bearer ${localStorage.getItem('token')}`//будем получать из локального хранилища по ключу токен
    return config//будем добавлять в момент авторизации
}
// мы вешаме интерцептоор на запрос так же можно на ответ, теперь он автомат будет подставлять токен в хэдр
$AuhHost.interceptors.request.use(authInterceptor)

export{
    $AuhHost,
    $host
}