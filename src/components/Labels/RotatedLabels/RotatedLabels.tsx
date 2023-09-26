import React from 'react';
import styles from '../Label.module.css';
import { RotatedLabelsProps } from './RotatedLabels.type';
const RotatedLabels = ({ color, text }: RotatedLabelsProps) => {
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

export default RotatedLabels;
