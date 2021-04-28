import { Briefcase } from 'react-bootstrap-icons';
import './Header.scss';
import PortfolioModal from '../PortfolioModal/PortfolioModal.js';
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getCoinsTable } from '../../store/actions/coins';

function Header (props) {
  const { getCoinsTable } = props;
  const { coinsTableData } = props;

  const [show, setShow] = useState(false);
  const [list, setList] = useState(coinsTableData);

  useEffect(() => {
    getCoinsTable();
    // eslint-disable-next-line
  },[]);
 
  const handleRemove = (id) => {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="header">
        <div className="main-coins">
          {coinsTableData.slice(0,3).map(item => {
            return (
              <span key={item.id}>{`${item.name} ${Number(item.priceUsd).toFixed(2)} USD` }</span>
            )
          })}
        </div>
        <div className="portfolio" onClick={handleShow}><Briefcase className="brief-case"/>
          <span>134,32 USD</span>
          <span>+2,38</span>
          <span>(1,80 %)</span>
        </div>
        <PortfolioModal 
          handleClose={handleClose} 
          handleShow={handleShow} 
          handleRemove={handleRemove}
          show={show}
          list={list}
        />
    </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Header);