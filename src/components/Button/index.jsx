import React from 'react';
import './style.css';

const Button = ({ color, children }) => {
  return (
    <button
      className={`${color === 'white' && 'buttonContainerT'} buttonContainer`}
    >
      {children}
    </button>
  );
};
export default Button;
