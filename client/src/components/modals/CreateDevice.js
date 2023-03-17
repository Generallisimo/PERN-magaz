import Modal from 'react-bootstrap/esm/Modal'
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/esm/Form";
import Dropdonw from "react-bootstrap/esm/Dropdown";
import { useContext, useState } from 'react';
import { Context } from '../..';
import DropdownToggle from 'react-bootstrap/esm/DropdownToggle';
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';

// два элемента которые отвечаю за виден ли элемент а другой за его скрытие
function CreateDevice ({show, onHide}) {
    //  выводим наши данные из device
    const {device} = useContext(Context)
    // создадим массив хар-тик
    const[info, setInfo] = useState([])
    // фун с которой мы будем добавлять эти характеристики
    const addInfo =()=>{
        // вызвыаем созданный нами пустой массив и в него мы кладем и полученый номер
        setInfo([...info, {title:'', description:'', number:Date.now()}])
    }
    // фун для удаления которая будет принимать параметр номера
    const removeInfo =(number)=>{
        // проверяем совпадает ли номер с элементом полученым с фун filter
        setInfo(info.filter(i=>i.number !== number))
    }
    return (
        <Modal
        show={show}
        onHide={onHide}
        size="lg"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Добавить новый устройство
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {/* добавляем инпут с названием бренда */}
            <Form>
                {/* выпадающее меню */}
                <Dropdonw className='mt-2'>
                    {/* выбирать тип */}
                    <DropdownToggle>Выбирете тип</DropdownToggle>
                    <DropdownMenu>
                        {device.types.map(type=>
                            <DropdownItem key={type.id}>{type.name}</DropdownItem>
                            )}
                    </DropdownMenu>
                </Dropdonw>
                <Dropdonw className='mt-2'>
                    {/* выбирать тип */}
                    <DropdownToggle>Выбирете бранд</DropdownToggle>
                    <DropdownMenu>
                        {device.brands.map(brand=>
                            <DropdownItem key={brand.id}>{brand.name}</DropdownItem>
                            )}
                    </DropdownMenu>
                </Dropdonw>
                <Form.Control
                className='mt-3'
                placeholder='Введите название устройства'
                >
                </Form.Control>
                <Form.Control
                className='mt-3'
                placeholder='Введите стоимость устройства'
                // для устройства стоимости
                type="number"
                >
                </Form.Control>
                <Form.Control
                className='mt-3'
                // для того чтобы картинку вставлять
                type="file"
                >
                </Form.Control>
                {/* разделяющая черта */}
                <hr/>
                {/* вызываем наши фун */}
                <Button variant='outline-dark' onClick={addInfo}>Добавить устройство</Button>
                {/* пробегаемся по массиву созданному при открытии на кнопку*/}
                {info.map(i=>
                // в качестве ключа указываем номер который мы добавляем при создание массива
                    <Row className='mt-2' key={i.number}>
                        <Col md={4}>
                            <Form.Control
                            placeholder='Введите названия устройсва'
                            >

                            </Form.Control>
                        </Col>
                        <Col md={4}>
                            <Form.Control
                            placeholder='Введите описание устройсва'
                            >

                            </Form.Control>
                        </Col>
                        <Col md={4}>
                            {/* где мы вызывваем обработчик и параметром передаем номер текущей харктеристики */}
                            <Button variant='outline-danger' onClick={()=>removeInfo(i.number)}>Удалить</Button>
                        </Col>
                    </Row>
                    )}
            </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={onHide} variant="outline-dark">Закрыть</Button>
          <Button onClick={onHide} variant="outline-success">Добавить</Button>
        </Modal.Footer>
      </Modal>
    );
}

export default CreateDevice;