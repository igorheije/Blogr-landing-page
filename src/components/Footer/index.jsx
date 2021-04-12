import React from 'react';
import Logo from '../../images/logo.svg';

import './style.css';
const Footer = () => {
  return (
    <div className="footerContainer">
      <div>
        <img src={Logo} alt="Logo" />
      </div>
      <div>
        <h4>Product</h4>
        <p>Overviw</p>
        <p>Pricing</p>
        <p>Marketplace</p>
        <p>Features</p>
        <p>Integrations</p>
      </div>
      <div>
        <h4>Company</h4>
        <p>About</p>
        <p>Team</p>
        <p>Blog</p>
        <p>Careers</p>
      </div>
      <div>
        <h4>Connect</h4>
        <p>Contact</p>
        <p>Newsletter</p>
        <p>LinkedIn</p>
      </div>
    </div>
  );
};

export default Footer;
