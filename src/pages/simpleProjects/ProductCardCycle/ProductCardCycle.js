import React from 'react';
import './ProductCardCycle.css';
import { Bicycle } from 'react-bootstrap-icons';

function ProductCardCycle() {
  return (
    <div id="wrap">
      <input className="initial" type="checkbox" />
      <input className="wheel1" name="wheel" type="radio" />
      <input className="wheel2" name="wheel" type="radio" />
      <input className="wheel3" name="wheel" type="radio" />
      <input className="wheel4" name="wheel" type="radio" />
      <input className="buy" type="checkbox" />
      <h1>Configure the Bike</h1>
      <h2>Added to Cart</h2>
      <h3>Wheels</h3>
      <div className="wheeltoggle"></div>
      <div className="wheeltoggle"></div>
      <div className="wheeltoggle"></div>
      <div className="wheeltoggle"></div>
      <div className="buy"></div>
      <div className="toggle expand">
        <Bicycle />
      </div>
      <div className="toggle">
        <Bicycle style={{ transform: 'rotate(-90deg)' }} />
      </div>
      <div className="background"></div>
      <div className="frame">
        <div className="rear"></div>
        <div className="stem"></div>
        <div className="shaft"></div>
        <div className="seat"></div>
        <div className="wheel one front">
          <div className="inner"></div>
        </div>
        <div className="wheel one back">
          <div className="inner"></div>
        </div>
      </div>
    </div>
  );
}

export default ProductCardCycle;
