import { useContext } from "react";
import { Context } from "../index";
import {observer} from "mobx-react-lite";
import Form  from "react-bootstrap/esm/Form";
import  Card  from "react-bootstrap/esm/Card"


const BrandType=observer(()=> {
    // проводим дискрутизацию с помощью хука
    const {device} = useContext(Context)
    return (
        <Form className="d-flex">
            {device.brands.map(brand =>
            // отрисовываем карточку товара поскольку итерируемся по массиву то указываем ключ
            <Card
            style={{cursor: 'pointer'}}
            key={brand.id}
            className="p-3"
            // вешаем обработчик
            onClick={()=>device.setSelectedBrand(brand)}
            // меняем рамку на светлую или если совпадают то темную  
            border={brand.id === device.selectedBrand.id ? 'danger' : 'light'}
            >
                {brand.name}
            </Card>
            
            )}
        </Form>
    );
})
  
  export default BrandType;

