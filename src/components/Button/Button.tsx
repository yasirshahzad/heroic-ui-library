import React from 'react';
import { ButtonProps } from './Button.types';
import './Button.css';

export default function Button({ btnType, label, disable, selected, ...props }: ButtonProps) {
  return (
    <button
      disabled={disable}
      className={['btn', `btn--${btnType}`, `${selected ? `selected--${btnType}` : ''}`].join(' ')}
      {...props}
    >
      <div className="btn_text">{label}</div>
    </button>
  );
}
