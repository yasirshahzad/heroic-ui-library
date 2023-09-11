import React from 'react';
import './input.css';
import { InputProps } from './Input.types';

/**
 *  UI component for user interaction
 */
const Input = ({ value, label, error, placeholder, ...props }: InputProps) => {
  return (
    <div>
      <label htmlFor="" className="input__label">
        {label}
      </label>

      <input value={value} placeholder={placeholder} className="input" {...props} />
      {error && <div className="error">{error}</div>}
    </div>
  );
};

export default Input;
