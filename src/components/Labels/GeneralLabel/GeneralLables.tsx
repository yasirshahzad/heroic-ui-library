import React from 'react';
import styles from '../Label.module.css';
import { GeneralLablesProps } from './GeneralLables.type';
const GeneralLables = ({ text }: GeneralLablesProps) => {
  return <div className={`${styles.label_container} ${styles.gen__label}`}>{text}</div>;
};

export default GeneralLables;
