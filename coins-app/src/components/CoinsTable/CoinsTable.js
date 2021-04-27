import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import './CoinsTable.scss'
import InputModal from '../InputModal/InputModal';
import React, { useState } from 'react';

function CoinsTable (props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return (
      <>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>priceUsd</th>
              <th>supply</th>
              <th>Add</th>
            </tr>
          </thead>
          <tbody>
            {props.data.map(item => {
              return (
                <tr key={item.id}>
                  <td>{item.rank}</td>
                  <td>{item.name}{` (${item.symbol})`}</td>
                  <td>{Number(item.priceUsd).toFixed(2)}</td>
                  <td>{Number(item.supply).toFixed(2)}</td>
                  <td><Button variant="outline-primary" size="sm" onClick={handleShow}>+</Button></td>
                </tr>
              )
            })}
          </tbody>
        </Table>
        <InputModal 
          handleClose={handleClose} 
          handleShow={handleShow} 
          show={show}
        />
      </>
    )
}

export default CoinsTable;