import React from 'react';
import './style.css';

const TextSection = ({ title, children }) => {
  return (
    <div className="textContainer">
      <h1>{title}</h1>
      <p>{children}</p>
    </div>
  );
};

export default TextSection;
