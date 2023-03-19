// здесь реаллизуем фун для регестр авториз и валидность токена
import {  $host } from ".";

//  пишем фун для рег которая будет принимать в себя почту и пароль
export const registretion = async (email, password) => {
    // укз что перем будет получать ответ из пост запроса где url и бэка и переменные которые будут получать где роль даем сразу админа
    const response  = await $host.post('api/user/registretion', {email, password, role: 'ADMIN'})
    return response
}
export const login = async (email, password) => {
    const response  = await $host.post('api/user/login', {email, password})
    return response
}
export const check = async () => {
    const response  = await $host.post('api/auth/registretion')
    return response
}