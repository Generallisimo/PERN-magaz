// здесь реаллизуем фун для регестр авториз и валидность токена
import {  $host } from ".";
// импорт библ которая поможет распарсить токен
import jwt_decode from "jwt-decode"

//  пишем фун для рег которая будет принимать в себя почту и пароль
export const registretion = async (email, password) => {
    // укз что перем будет получать ответ из пост запроса где url и бэка и переменные которые будут получать где роль даем сразу админа
    const {data}  = await $host.post('api/user/registretion', {email, password, role: 'ADMIN'})
    return jwt_decode(data)//получаем результат и сразу его декодируем
}
export const login = async (email, password) => {
    const {data}  = await $host.post('api/user/login', {email, password})
    return jwt_decode(data)
}
export const check = async () => {
    const {data}  = await $host.post('api/auth/registretion')
    return jwt_decode(data)
}