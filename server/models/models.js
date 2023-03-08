// импорт из БД
const sequelize = require('../db')
// иморит типа 
const{DataTypes}=require('sequelize')


// создаем БД которые будут между собой связанны на нашем сайте
// укз название модели и созд объект
const User = sequelize.define('user', {
    // поле числовое c с первичным ключем и возможность автоинкреминации то есть новый
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    // строка уникальная
    email:{type:DataTypes.STRING, unique:true},
    password:{type:DataTypes.STRING},
    // его значимость на сайте админ или пользователь поумолчанию просто user
    role:{type:DataTypes.STRING, defaultValue:"USER"},
})
const Basket = sequelize.define('backet', {
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
})
const BasketDevise = sequelize.define('basket_device', {
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
})
const Device = sequelize.define('device', {
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    name:{type:DataTypes.STRING, unique:true, allowNull:false},
    price:{type:DataTypes.INTEGER, allowNull:false},
    rating:{type:DataTypes.INTEGER, defaultValue:0},
    img:{type:DataTypes.STRING, allowNull:false},
})
const Type = sequelize.define('type', {
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    name:{type:DataTypes.STRING, unique:true, allowNull:false},
})
const Brand = sequelize.define('brand', {
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    name:{type:DataTypes.STRING, unique:true, allowNull:false},
})
const Rating = sequelize.define('rating', {
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    rating:{type:DataTypes.STRING, allowNull:false},
})
const DeviceInfo = sequelize.define('device_info', {
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    title:{type:DataTypes.STRING, allowNull:false},
    description:{type:DataTypes.STRING, allowNull:false},
})
// вызываем для связи мн к мн
const TypeBrand = sequelize.define('type_brand', {
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},  
    // остальные поля добавятся сами так как мы их прогоняем через связь мн к мн
})


// вызываем зависимости 
// 1 к 1
User.hasOne(Basket) // корзина у польз одна
Basket.belongsTo(User)
// 1 к мн
User.hasMany(Rating) //польз может иметь много райт
Rating.belongsTo(User)

Basket.hasMany(BasketDevise)
BasketDevise.belongsTo(Basket)

Type.hasMany(Device)
Device.belongsTo(Type)

Brand.hasMany(Device)
Device.belongsTo(Brand)

Device.hasMany(Rating)
Rating.belongsTo(Device)

Device.hasMany(BasketDevise)
BasketDevise.belongsTo(Device)

Device.hasMany(DeviceInfo)
DeviceInfo.belongsTo(Device)
// мн к мн
Type.belongsToMany(Brand, {through: TypeBrand}) //для связи нужно вызвать фун
Brand.belongsToMany(Type, {through: TypeBrand})
// экспортируем
module.exports={
    User, 
    Basket,
    BasketDevise, 
    Device, 
    Type, 
    Brand,
    Rating,
    DeviceInfo,
    TypeBrand,
}