import { useContext } from "react";
import { Context } from "../index";
import ListGroup from "react-bootstrap/esm/ListGroup";
import {observer} from "mobx-react-lite";


const TypeBar = observer(() => {
    // проводим дискрутизацию с помощью хука
    const {device} = useContext(Context)
    return (
        <div>
            {/* вставляем лист из bootstrap */}
            <ListGroup>
                {/* выводим из device значения (Nosql) */}
                {device.types.map(type=>
                // создаем ключ по которму он будет проходить и потом указывем имя также создаем обработчик чтобы при нажатии можно было менять выброное поле
                    <ListGroup.Item 
                    style={{cursor: 'pointer'}}
                    // для визуального измениния
                    active={type.id === device.selectedType.id}
                    // для получения данных при нажатии
                    onClick={() => device.setSelectedType(type)}
                    key={type.id}
                    >
                        {type.name}
                    </ListGroup.Item>
                )}
            </ListGroup>
        </div>
    );
})
  
  export default TypeBar;

