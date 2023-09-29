import React from 'react';
import styles from './Tab.module.css'; // Import the CSS Module
import { TabsProps } from './Tabs.types';

const Tabs = ({ label, disable, selected, onClick, className }: TabsProps) => {
  let classes = `${styles.btn__tabs} ${selected ? styles['btn__tabs--selected'] : ''}`;

  if (className) classes += ` ${className}`;

  return (
    <button disabled={disable} className={classes} onClick={onClick}>
      {label}
    </button>
  );
};

export default Tabs;
