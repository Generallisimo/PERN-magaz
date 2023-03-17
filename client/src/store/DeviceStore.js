// здесь мы будем использовать mobx для получение данных о авторизации пользователя 
// имп перем mobx
import {makeAutoObservable} from 'mobx';
export default class DeviceStore {
    constructor(){
        this._types = [
            {id: 1, name: 'Холодильник'},
            {id: 2, name: 'Смартфоны'}
        ]
        this._brands = [
            {id: 1, name: 'Samusung'},           
            {id: 2, name: 'Apple'}
        ]
        this._device = [
            {id: 1, name: 'Iphone 12 Pro', price: 25000, rating: 5, img: `https://www.apple.com/newsroom/images/product/iphone/geo/apple_iphone-12_new-design_geo_10132020.jpg.og.jpg?202302091629`},
            {id: 2, name: 'Iphone 12 Pro', price: 25000, rating: 5, img: `https://www.apple.com/newsroom/images/product/iphone/geo/apple_iphone-12_new-design_geo_10132020.jpg.og.jpg?202302091629`},
            {id: 3, name: 'Iphone 12 Pro', price: 25000, rating: 5, img: `https://www.apple.com/newsroom/images/product/iphone/geo/apple_iphone-12_new-design_geo_10132020.jpg.og.jpg?202302091629`},
            {id: 4, name: 'Iphone 12 Pro', price: 25000, rating: 5, img: `https://www.apple.com/newsroom/images/product/iphone/geo/apple_iphone-12_new-design_geo_10132020.jpg.og.jpg?202302091629`},

        ]
        makeAutoObservable(this)//будет следить за переменными и их изменениями при них компаненты будут  перерендеватся 
    }

    // cозд фун которые будут изменять состояние экшен
    setTypes(type){
        this._types = type // будет присваеть значние
    }
    setBrands(brand){ 
        this._brands = brand 
    }
    setDevice(device){ 
        this._device = device 
    }

    // cозд гетеры они нужны для того чтобы получать какие-то изменения в наших переменных
    get types(){
        return this._types
    }
    get brands(){
        return this._brands
    }
    get device(){
        return this._device
    }
}
