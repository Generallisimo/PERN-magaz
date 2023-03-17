import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import TypeBar from "../components/TypeBar";
import Brand from "../components/Brand";
import DeviceList from "../components/DeviceList";

function Shop() {
    return (
      <Container className="mt-2">
        <Row>
            <Col md={3}>
              {/* добавляем typebar */}
              <TypeBar/>
            </Col>
            <Col md={9}>
             <Brand/> 
             <DeviceList/>
            </Col>
        </Row>
      </Container>
    );
  }
  
  export default Shop;
  