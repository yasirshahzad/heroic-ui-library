import React from 'react';
import './button.css';

// label, type, onClick, disable, active

export interface ButtonProps {
  /**
   * Which color of button should be?
   */
  btnType: 'red' | 'blue' | 'green' | 'orange' | 'gray' | 'disable';

  /**
   * Button contents
   */
  label: string;

  /**
   * Optional click handler
   */
  onClick?: () => void;
  /**
   *Optinal disable button
   */
  disable?: boolean;
  /**
   *Optinal Active/selected button
   */
  selected?: boolean;
}
/**
 * Primary Button component for user interaction
 */
export const Button = ({ btnType, label, disable, selected, ...props }: ButtonProps) => {
  return (
    <>
      <button
        disabled={disable}
        className={['btn', `btn--${btnType}`, `${selected ? `selected--${btnType}` : ''}`].join(' ')}
        {...props}
      >
        <div className="btn_text">{label}</div>
      </button>
    </>
  );
};

export default Button;
