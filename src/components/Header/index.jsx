import React from 'react';
import './style.css';
import Logo from '../../images/logo.svg';
import Hanburger from '../../images/icon-hamburger.svg';
import Button from '../Button';

const Header = () => {
  return (
    <header className="headerContainer">
      <div className="headerDiv">
        <sidebar className="sidebarContainer">
          <img src={Logo} />
          {/* Product Overview Pricing Marketplace Features Integrations Company
          About Team Blog Careers Connect Contact Newsletter LinkedIn
          <button>Login</button>
          <button>Sign Up</button> */}
          <a>
            <img src={Hanburger} />
          </a>
        </sidebar>
        <div className="headerTitle">
          <h1>A modern publishing platform</h1>
          <p>Grow your audience and build your online brand</p>
        </div>
        <div className="headerButtons">
          <Button color="white">Start for Free</Button>
          <Button>Learn More</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
