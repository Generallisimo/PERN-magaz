import { useContext } from "react";
import { Context } from "../index";
import {observer} from "mobx-react-lite";
import Row  from "react-bootstrap/esm/Row";
import  Card  from "react-bootstrap/esm/Card"
import DeviceItem from './DeviceItem'
import Col from "react-bootstrap/esm/Col";
// импорт хука
import { useNavigate } from "react-router-dom"
import { DEVICE_ROUTER } from "../utils/components";

function DeviceList() {
    // для динамического перехода по странице мы используем хук навигации
    const Navigate = useNavigate()
    // проводим дискрутизацию с помощью хука
    const {device} = useContext(Context)
    return (
        <Row>
            {device.devices.map(device =>
            // здесь вызываем обрабочик где указываем наш роутер и туда добавляем id 
            <Col md={3} className={"mt-3 "} onClick={()=>Navigate(DEVICE_ROUTER + '/' + device.id)}>
                {/* // будем отрисовывать компонент из DeviceItem который мы сделаем */}
                <Card>
                    {/* где будем предавать ключ и как пропс текущий жлемент итирации */}
                    <DeviceItem key={device.id} device={device}/>
                </Card>
            </Col>
            )}
        </Row>
    )
}
export default observer(DeviceList);