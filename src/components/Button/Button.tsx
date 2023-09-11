import React from 'react';
import classNames from 'classnames';
import { ButtonProps } from './Button.types';
import './Button.css';
import img from '../../assets/HL_UI-Btn-RectGray.png';
import img2 from '../../assets/Btn_leave.webp';

const preventDefault = (e: Event | React.SyntheticEvent) => e.preventDefault();

export default function Button(props: ButtonProps) {
  const { children, type, variant = 'primary', className, outlined, ...otherProps } = props;

  return (
    <button
      type={type || 'button'}
      onMouseEnter={otherProps.disabled ? preventDefault : otherProps.onMouseEnter}
      aria-disabled={otherProps.disabled ? 'true' : undefined}
      className={classNames(
        'btn',
        {
          [`btn-outline-${variant}`]: outlined,
          [`btn-${variant}`]: !outlined,
        },
        className,
      )}
      {...otherProps}
    >
      {children}
      <img src={img2} />
      <img src={img} />
    </button>
  );
}
