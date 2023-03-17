// навигация по страницу
// импорт router

import { useContext } from "react";
import {Routes, Route, Navigate} from "react-router-dom"
import { Context } from "..";
import { authRoutes, publicRoutes } from "../routes";
import { SHOP_ROUTER } from "../utils/components";

function AppRouter() {
    // cозд константу для того чтобы выводить авторизован польз или нет 1 способ
    // const isAuth = false
    // после полученного значения с mobx выводим
    const {user} = useContext(Context) 
    console.log(user)
  return (
    // укз для того чтобы если  не отработает не один элемент внутри, то мы сожем вывести последню фун 
    <Routes>
        {/* имп массив с роутами который доступ ток авторизованому и пробегаемся по нему дела десктрутуризацию(присваеваем к массив к нескольким элементам) и вытаскиваем путь и компанет */}
        {user.isAuth && authRoutes.map(({path, Component})=>//проверям, если путь равен тру, то пропуска
        // и для каждого элемента в массиве мы отрисовываем путь и страницу
            <Route key={path} path={path} element={<Component/>} />//exact - путь должен точно совпадать и укз ключ к стр то есть путь, так как он должен быть уникальным
        )}
        {/* для публичного доступа */}
        { publicRoutes.map(({path, Component})=>
            <Route key={path} path={path} element={<Component/>} />
        )}
        {/* добавляем проверку, если url не рабочий или не существуе */}
        <Route path='*' element={<Navigate to={SHOP_ROUTER}/>} />
    </Routes>
  );
}

export default AppRouter;
