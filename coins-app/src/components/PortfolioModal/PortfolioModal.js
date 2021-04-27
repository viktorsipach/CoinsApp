import {Modal, Button, ListGroup } from 'react-bootstrap';
import {BsX} from 'react-icons/bs';
import './PortfolioModal.scss';

function PortfolioModal(props) {

  return (
    <>
      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Portfolio</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ListGroup>
            {props.list.map(item => {
                return (
                  <ListGroup.Item key={item.id}>{item.name} <BsX className="icon-remove" onClick={() => props.handleRemove(item.id)}/></ListGroup.Item>
                )
            })}
          </ListGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={props.handleClose}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default PortfolioModal;