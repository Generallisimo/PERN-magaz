import Modal from 'react-bootstrap/esm/Modal'
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/esm/Form";

// два элемента которые отвечаю за виден ли элемент а другой за его скрытие
function CreateType ({show, onHide}) {
    return (
        <Modal
        show={show}
        onHide={onHide}
        size="lg"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Добавить новый тип
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {/* добавляем инпут с названием бренда */}
            <Form>
                <Form.Control
                placeholder='Добавьте тип'
                >
                </Form.Control>
            </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={onHide} variant="outline-dark">Закрыть</Button>
          <Button onClick={onHide} variant="outline-success">Добавить</Button>
        </Modal.Footer>
      </Modal>
    );
}

export default CreateType;