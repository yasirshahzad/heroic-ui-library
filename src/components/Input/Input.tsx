/* eslint-disable @typescript-eslint/no-unsafe-member-access */
// Input.tsx
import React from 'react';
import styles from './Input.module.css'; // Import CSS module
import { InputProps } from './Input.types';

/**
 *  UI component for user interaction
 */
const Input = ({ value, label, error, placeholder, ...props }: InputProps) => {
  return (
    <div>
      <label htmlFor="" className={styles.input__label}>
        {label}
      </label>

      <input value={value} placeholder={placeholder} className={styles.input} {...props} />
      {error && <div className={styles.error}>{error}</div>}
    </div>
  );
};

export default Input;
