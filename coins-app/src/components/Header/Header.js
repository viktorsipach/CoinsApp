import { Briefcase } from 'react-bootstrap-icons';
import './Header.scss';
import PortfolioModal from '../PortfolioModal/PortfolioModal.js';
import React, { useState } from 'react';

function Header (props) {
  const [show, setShow] = useState(false);
  const [list, setList] = useState(props.data);
 
  const handleRemove = (id) => {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="header">
        <div className="main-coins">
          {props.data.slice(0,3).map(item => {
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

export default Header;