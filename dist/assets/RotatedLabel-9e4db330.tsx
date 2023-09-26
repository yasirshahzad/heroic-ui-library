import React from 'react';
import styles from './RotedLabel.module.css';
import { LabelProps } from '../Label.type';

const RotatedLabel = ({ color, text }: LabelProps) => {
  return (
    <div
      className={`${styles.label_container} ${styles.tech_rotated} ${styles.rotated__label}  ${
        styles[`rotated__label__${color}`]
      }`}
    >
      <div className={styles.rotated__label__text}>{text}</div>
    </div>
  );
};

export default RotatedLabel;
