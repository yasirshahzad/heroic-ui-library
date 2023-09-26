import React from 'react';
import styles from './TechLabel.module.css';
import { LabelProps } from '../Label.type';

const TechLabel = ({ text }: LabelProps) => {
  return <div className={`${styles.label_container} ${styles.tech_rotated} ${styles.tech__label}`}>{text}</div>;
};

export default TechLabel;
