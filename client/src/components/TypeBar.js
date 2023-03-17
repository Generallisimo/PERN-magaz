// import { useContext } from "react";
// import { Context } from "../index";
import ListGroup from "react-bootstrap/esm/ListGroup";

function TypeBar() {
    // проводим дискрутизацию с помощью хука
    // const {device} = useContext(Context)
    return (
        <div>
            {/* вставляем лист из bootstrap */}
            <ListGroup>
                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
            </ListGroup>
        </div>
    );
  }
  
  export default TypeBar;