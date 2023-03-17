// здесь мы будем использовать mobx для получение данных о авторизации пользователя 
// имп перем mobx
import {makeAutoObservable} from 'mobx';
export default class UseerStore {
    // создаем конструктор он будет вызываться при создание объекта
    constructor(){
        this._isAuth = false //нижнее подчеркивание для того чтобы перменная не могла изменяться
        this._user = {}
        makeAutoObservable(this)//будет следить за переменными и их изменениями при них компаненты будут  перерендеватся 
    }

    // cозд фун которые будут изменять состояние экшен
    setIsAuth(bool){
        this._isAuth = bool // будет присваеть значние
    }
    setUser(user){ // для изменения пользователя
        this._user = user 
    }

    // cозд гетеры они нужны для того чтобы получать какие-то изменения в наших переменных
    get isAuth(){
        return this._isAuth
    }
    get user(){
        return this._user
    }
}