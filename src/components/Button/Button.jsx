import React from 'react';
import './Button.scss';

const Button = (props) => {
  return (
    <button className='button' style={props.style} onClick={props.onClick}>
      {props.children}
    </button>
  );
}

export default Button;
