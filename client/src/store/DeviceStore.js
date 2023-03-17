// здесь мы будем использовать mobx для получение данных о авторизации пользователя 
// имп перем mobx
import {makeAutoObservable} from 'mobx';
export default class DeviceStore {
    constructor(){
        this._types = [
            {id: 1, name: 'Холодильник'},
            {id: 2, name: 'Смартфоны'},
            {id: 3, name: 'Ноутбуки'},
            {id: 4, name: 'Телевизоры'},
        ]
        this._brands = [
            {id: 1, name: 'Samusung'},           
            {id: 2, name: 'Apple'},
            {id: 3, name: 'Lenovo'},
            {id: 4, name: 'Asus'}
        ]
        this._devices = [
            {id: 1, name: 'Iphone 12 Pro', price: 25000, rating: 5, img: `https://www.apple.com/newsroom/images/product/iphone/geo/apple_iphone-12_new-design_geo_10132020.jpg.og.jpg?202302091629`},
            {id: 2, name: 'Iphone 12 Pro', price: 25000, rating: 5, img: `https://www.apple.com/newsroom/images/product/iphone/geo/apple_iphone-12_new-design_geo_10132020.jpg.og.jpg?202302091629`},
            {id: 3, name: 'Iphone 12 Pro', price: 25000, rating: 5, img: `https://www.apple.com/newsroom/images/product/iphone/geo/apple_iphone-12_new-design_geo_10132020.jpg.og.jpg?202302091629`},
            {id: 4, name: 'Iphone 12 Pro', price: 25000, rating: 5, img: `https://www.apple.com/newsroom/images/product/iphone/geo/apple_iphone-12_new-design_geo_10132020.jpg.og.jpg?202302091629`},
            {id: 5, name: 'Iphone 12 Pro', price: 25000, rating: 5, img: `https://www.apple.com/newsroom/images/product/iphone/geo/apple_iphone-12_new-design_geo_10132020.jpg.og.jpg?202302091629`},
            {id: 6, name: 'Iphone 12 Pro', price: 25000, rating: 5, img: `https://www.apple.com/newsroom/images/product/iphone/geo/apple_iphone-12_new-design_geo_10132020.jpg.og.jpg?202302091629`},
            {id: 7, name: 'Iphone 12 Pro', price: 25000, rating: 5, img: `https://www.apple.com/newsroom/images/product/iphone/geo/apple_iphone-12_new-design_geo_10132020.jpg.og.jpg?202302091629`},
            {id: 8, name: 'Iphone 12 Pro', price: 25000, rating: 5, img: `https://www.apple.com/newsroom/images/product/iphone/geo/apple_iphone-12_new-design_geo_10132020.jpg.og.jpg?202302091629`},
            {id: 9, name: 'Iphone 12 Pro', price: 25000, rating: 5, img: `https://www.apple.com/newsroom/images/product/iphone/geo/apple_iphone-12_new-design_geo_10132020.jpg.og.jpg?202302091629`},

        ]
        // добавим новое поле где будут храниться наши данные по умолч оно будет пустым
        this._selectedType = {}
        this._selectedBrand = {}
        makeAutoObservable(this)//будет следить за переменными и их изменениями при них компаненты будут  перерендеватся 
    }

    // cозд фун которые будут изменять состояние экшен
    setTypes(type){
        this._types = type // будет присваеть значние
    }
    setBrands(brand){ 
        this._brands = brand 
    }
    setDevices(device){ 
        this._devices = device 
    }
    // для нажатия 
    setSelectedType(type) {
        this._selectedType = type
    }
    setSelectedBrand(type) {
        this._selectedBrand = type
    }

    // cозд гетеры они нужны для того чтобы получать какие-то изменения в наших переменных
    get types(){
        return this._types
    }
    get brands(){
        return this._brands
    }
    get devices(){
        return this._devices
    }
    // гетер для обработки
    get selectedType() {
        return this._selectedType
    }
    get selectedBrand() {
        return this._selectedBrand
    }
}
