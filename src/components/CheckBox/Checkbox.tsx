// Checkbox.tsx
import React from 'react';
import styles from './Checkbox.module.css'; // Import CSS module
import { CheckBoxProps } from './Checkbox.types';

export default function CheckBox({ size, selected, crossed, ...props }: CheckBoxProps) {
  const checkboxClasses = [styles.checkbox, styles[`checkbox__${size}`]].join(' ');
  const iconClasses = [
    styles.checkbox__icon,
    selected ? (crossed ? styles.checkbox__crossed : styles.checkbox__checked) : styles.checkbox__default,
  ].join(' ');

  return (
    <button className={checkboxClasses} {...props}>
      <div className={iconClasses} />
    </button>
  );
}
