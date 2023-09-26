import React from 'react';
import styles from './GeneralLabel.module.css';
import { LabelProps } from '../Label.type';
const GeneralLable = ({ text }: LabelProps) => {
  return <div className={`${styles.label_container} ${styles.gen__label}`}>{text}</div>;
};

export default GeneralLable;
