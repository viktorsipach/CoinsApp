import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import './CoinsTable.scss'
import InputModal from '../InputModal/InputModal';
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getCoinsTable } from '../../store/actions/coins';

function CoinsTable (props) {
  const { getCoinsTable } = props;
  const { coinsTableData } = props;
  const [show, setShow] = useState(false);
  
  useEffect(() => {
    getCoinsTable();
    // eslint-disable-next-line
  },[]);

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
          {coinsTableData.map(item => {
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

const mapStateToProps = ({ coinsTableData }) => {
  return {
    coinsTableData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCoinsTable: () => dispatch(getCoinsTable()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CoinsTable);