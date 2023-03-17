// файл где будут расписаны наши роуты


import Admin from "./pages/Admin"
import Auth from "./pages/Auth"
import Basket from "./pages/Basket"
import DevicePage from "./pages/DevicePage"
import Shop from "./pages/Shop"
import { ADMIN_ROUTER, BASKET_ROUTER, DEVICE_ROUTER, LOGIN_ROUTER, REGISTRETION_ROUTER, SHOP_ROUTER } from "./utils/components"

// фун для доступа авторизованных и экспортируем
export const authRoutes = [
// добавялем объект
{
    // путь/ссылка 1 способ
    // path: "/admin",
    // нормальное ООП вытаскиваем из нашего файла константы путей
    path:ADMIN_ROUTER,
    // сама страница
    Component: Admin
},
{
    path:BASKET_ROUTER,
    Component: Basket
}
]

// фун для доступа общих
export const publicRoutes = [
    {
        path:LOGIN_ROUTER,
        Component: Auth
    },
    {
        path:REGISTRETION_ROUTER,
        Component: Auth
    },
    {
        path:SHOP_ROUTER,
        Component: Shop
    },
    {
        path:DEVICE_ROUTER + '/:id',// будем получать id при просмотреть конкретного устройства
        Component: DevicePage
    }
]
