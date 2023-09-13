import React from 'react';
import './TechButton.css';
export interface TechButtonProps {
  btnType: 'green' | 'blue' | 'orange' | 'red' | 'lightblue' | 'gray';
  label: string;
  disable?: boolean;
  selected?: boolean;
}

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
