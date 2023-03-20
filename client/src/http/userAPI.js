// здесь реаллизуем фун для регестр авториз и валидность токена
import {  $host, $AuhHost } from ".";
// импорт библ которая поможет распарсить токен
import jwt_decode from "jwt-decode"

//  пишем фун для рег которая будет принимать в себя почту и пароль
export const registretion = async (email, password) => {
    // укз что перем будет получать ответ из пост запроса где url и бэка и переменные которые будут получать где роль даем сразу админа
    const {data}  = await $host.post('api/user/registretion', {email, password, role: 'ADMIN'})
    // по ключ токен мы заносим его в локальное хранилеще
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)//получаем результат и сразу его декодируем
}
export const login = async (email, password) => {
    const {data}  = await $host.post('api/user/login', {email, password})
    // по ключ токен мы заносим его в локальное хранилеще
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}
export const check = async () => {
    // вызываем фун чтобы она проверяла полученый токен, если он валиден, то польз не будет разлогиниваться это работает с нашим мидлвайром который мы сделали на баке
    const {data}  = await $AuhHost.get('api/user/auth')
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}