import React from 'react';
import styles from './GeneralLabel.module.css';
import { LabelProps } from '../Label.type';
const GeneralLabel = ({ text, className }: LabelProps) => {
  let classes = `${styles.label_container} ${styles.gen__label}`;
  if (className) classes += ` ${className}`;
  return <div className={classes}>{text}</div>;
};

export default GeneralLabel;
