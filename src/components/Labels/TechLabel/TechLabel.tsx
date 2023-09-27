import React from 'react';
import styles from './TechLabel.module.css';
import { LabelProps } from '../Label.type';

const TechLabel = ({ text, className }: LabelProps) => {
  let classes = `${styles.label_container} ${styles.tech_rotated} ${styles.tech__label}`;
  if (className) classes += ` ${className}`;

  return <div className={classes}>{text}</div>;
};

export default TechLabel;
