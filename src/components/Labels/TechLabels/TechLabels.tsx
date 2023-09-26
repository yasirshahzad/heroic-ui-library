import React from 'react';
import styles from '../Label.module.css';
import { TechLabelsProps } from './TechLabels.type';
const TechLabels = ({ text }: TechLabelsProps) => {
  return <div className={`${styles.label_container} ${styles.tech_rotated} ${styles.tech__label}`}>{text}</div>;
};

export default TechLabels;
