import React from 'react';
import './Input.scss'

const Input = (props) => {
  return (
    <div style={props.style} className='input flex-column'>
      <span className='input__label'>{props.label}</span>
      <input className='input__field' {...props.control} type="text"/>
    </div>
  );
}

export default Input;
