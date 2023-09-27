import React from 'react';
import styles from './RotedLabel.module.css';
import { LabelProps } from '../Label.type';

const RotatedLabel = ({ color, text, className }: LabelProps) => {
  let classes = `${styles.rotated__label} ${styles[`rotated__label__${color}`]}`;
  if (className) classes += ` ${className}`;

  return (
    <div className={classes}>
      <div className={styles.rotated__label__text}>{text}</div>
    </div>
  );
};

export default RotatedLabel;
