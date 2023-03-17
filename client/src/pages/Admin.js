import { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/esm/Container";
import CreateBrand from "../components/modals/CreateBrand";
import CreateDevice from "../components/modals/CreateDevice";
import CreateType from "../components/modals/CreateType";

function Admin() {
  // создаем перемнные которые будут отвечать за видимость модального окна подменяя значения show и onHide
  const [brandVisable, setBrandVisable] = useState(false)
  const [typeVisable, setTypeVisable] = useState(false)
  const [deviceVisable, setDeviceVisable] = useState(false)
    return (
      <Container className="d-flex flex-column">
        {/* добавляем обработчики на кнопки чтобы они показывали */}
        <Button variant={"outline-dark"} className="mt-4 p-2" onClick={()=>setTypeVisable(true)} >Добавить тип</Button>
        <Button variant={"outline-dark"} className="mt-4 p-2" onClick={()=>setBrandVisable(true)} >Добавить бренд</Button>
        <Button variant={"outline-dark"} className="mt-4 p-2" onClick={()=>setDeviceVisable(true)} >Добавить устройство</Button>
        {/* передаем наше состояние выше созданное где вызываем наши прупсы и даем им значения*/}
        <CreateType show={typeVisable} onHide={()=>setTypeVisable(false)}/>
        <CreateBrand show={brandVisable} onHide={()=>setBrandVisable(false)} />
        <CreateDevice show={deviceVisable} onHide={()=>setDeviceVisable(false)} />
      </Container>
    );
  }
  
  export default Admin;
  