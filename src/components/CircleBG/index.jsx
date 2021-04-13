import React from 'react';
import PhonesI from '../../images/illustration-phones.svg';
import './style.css';
const CircleBG = () => {
  return (
    <main className="mainCircle">
      <div>
        <div className="phoneDiv">
          <img src={PhonesI} alt="Imagem De telefones" className="phonesI" />
        </div>

        <div className="circleContainer">
          <h1> State of the Art Infrastructure</h1>
          <p>
            With reliability and speed in mind, worldwide data centers provide
            the backbone for ultra-fast connectivity. This ensures your site
            will load instantly, no matter where your readers are, keeping your
            site competitive.
          </p>
        </div>
      </div>
    </main>
  );
};

export default CircleBG;
