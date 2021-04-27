import {Modal, Button , InputGroup, FormControl} from 'react-bootstrap';

function InputModal(props) {
  return (
    <>
      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
        <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroup-sizing-default">Add to Portfolio</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                type="number"
              />
        </InputGroup>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
          <Button variant="primary" type="submit">
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

  export default InputModal;