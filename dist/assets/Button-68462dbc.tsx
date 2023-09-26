/* eslint-disable @typescript-eslint/no-unsafe-member-access */
// Button.tsx
import React from 'react';
import { ButtonProps } from './Button.types';
import styles from './Button.module.css'; // Import CSS module

export default function Button({ btnType, label, disable, selected, ...props }: ButtonProps) {
  const buttonClasses = [styles.btn, styles[`btn-${btnType}`], selected ? styles[`selected-${btnType}`] : ''];

  return (
    <button disabled={disable} className={buttonClasses.join(' ')} {...props}>
      <div className={styles.btn_text}>{label}</div>
    </button>
  );
}
