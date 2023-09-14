import React from 'react';
import './TechButton.css';
import { TechButtonProps } from './TechButton.types';

export default function TechButton({ btnType, label, disable, selected, ...props }: TechButtonProps) {
  return (
    <button
      disabled={disable}
      className={['btn__tech', `btn__tech--${btnType}`, `${selected ? `selected--${btnType}` : ''}`].join(' ')}
      {...props}
    >
      <div className="btn__tech__text">{label}</div>
    </button>
  );
}
