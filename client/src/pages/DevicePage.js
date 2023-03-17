import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Image from "react-bootstrap/esm/Image";
import Form from "react-bootstrap/esm/Form";
import Rait from "../assets/Rait.png"
import Row from "react-bootstrap/esm/Row";
import Card from "react-bootstrap/esm/Card";
import Button from "react-bootstrap/esm/Button";

function DevicePage() {
  // для примера возьмем объект
  const device  = {id: 1, name: 'Iphone 12 Pro', price: 25000, rating: 5, img: `https://www.apple.com/newsroom/images/product/iphone/geo/apple_iphone-12_new-design_geo_10132020.jpg.og.jpg?202302091629`}
  // создадим хар-ки
  const description = [
    {id:1, title:'Оперативная память', description:'5 гб'},
    {id:2, title:'Камера', description:'12 мп'},
    {id:3, title:'Процессор', description:'Пентиум 3'},
    {id:4, title:'Кол-во ядров', description:'2'},
    {id:5, title:'Аккумулятор', description:'4000'},
  ]
    return (
    <Container className="mt-3">
      <Row>
        <Col md={4}>
          <Image width={300} height={300} src={device.img}/>
        </Col>
        <Col md={4}>
          <Form className="d-flex flex-column align-items-center">
            <h2>{device.name}</h2>
            <div
            className="d-flex align-items-center justify-content-center"
            // создаем картинку задним фоном и отцентровываем ее чтобы не повторялась
            style={{background: `url(${Rait}) no-repeat center center`, width:240, height: 240, backgroundSize: 'cover', fontSize:64}}
            >
                {device.rating}
            </div>
          </Form>
        </Col>
        <Col md={4}>
          {/* добавляем карточку с добавление в корзину */}
          <Card
          className="d-flex flex-column align-items-center justify-content-around"
          style={{width: 300, height: 300, fontSize: 32, border: '5px solid lightgray'}}
          >
            <h2>От {device.price} руб.</h2>
            <Button variant="outline-dark">Добавить в корзину</Button>
          </Card>
        </Col>
      </Row>
      {/* создадим описание для товавра из БД */}
      <Row className="d-flex flex-column m-3">
        <h1>Характеристики</h1>
          {/* пройдемся по массиву */}
          {description.map(info =>
            // сделаем по ключу
            <Row key={info.id} style={{padding:10}}>
              {info.title}: {info.description}
            </Row>
            )}
      </Row>
    </Container>
    );
  }
  
  export default DevicePage;
  