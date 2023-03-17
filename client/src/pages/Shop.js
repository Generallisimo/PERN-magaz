import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import TypeBar from "../components/TypeBar";

function Shop() {
    return (
      <Container className="mt-2">
        <Row>
            <Col md={3}>
              {/* добавляем typebar */}
              <TypeBar/>
            </Col>
            <Col md={9}>
            </Col>
        </Row>
      </Container>
    );
  }
  
  export default Shop;
  