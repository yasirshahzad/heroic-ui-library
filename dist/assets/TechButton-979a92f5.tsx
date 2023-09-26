import React from 'react';
import styles from './TechButton.module.css'; // Import the CSS Module
import { TechButtonProps } from './TechButton.types';

export default function TechButton({ btnType, label, disable, selected, ...props }: TechButtonProps) {
  return (
    <button
      disabled={disable}
      className={[
        styles.btn__tech,
        styles[`btn__tech--${btnType}`], // Use dynamic class names for btnType
        selected ? styles[`selected--${btnType}`] : '', // Conditionally apply selected class
      ].join(' ')}
      {...props}
    >
      <div className={styles.btn__tech__text}>{label}</div>
    </button>
  );
}
