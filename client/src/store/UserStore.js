// здесь мы будем использовать mobx для получение данных о авторизации пользователя 
// имп перем mobx
import { makeAutoObservable, action} from 'mobx';
export default class UseerStore {
    // создаем конструктор он будет вызываться при создание объекта
    constructor(){
        this._isAuth = true //нижнее подчеркивание для того чтобы перменная не могла изменяться
        this._user = {}
        makeAutoObservable(this 
        //     {
        //     _isAuth: observable,
        //     _user: observable,
        //     setIsAuth: action,
        //     setUser: action,
        //     isAuth: computed,
        //     user: computed,
        //   }
          );//будет следить за переменными и их изменениями при них компаненты будут  перерендеватся 
    }

    // cозд фун которые будут изменять состояние экшен
    // @action
    setIsAuth=action((bool)=>{
        // runInAction(() => {
        this._isAuth = bool; // будет присваеть значние
        // })
    })
    // @action 
    setUser=action((user)=>{ // для изменения пользователя
        // runInAction(() => {
        this._user = user; 
    // })
    })

    // cозд гетеры они нужны для того чтобы получать какие-то изменения в наших переменных
    get isAuth(){
        return this._isAuth
    }
    get user(){
        return this._user
    }
}