import React from 'react';
import styles from './Tab.module.css'; // Import the CSS Module
import { TabsProps } from './Tabs.types';

const Tabs = ({ label, disable, selected }: TabsProps) => {
  return (
    <button disabled={disable} className={`${styles.btn__tabs} ${selected ? styles['btn__tabs--selected'] : ''}`}>
      {label}
    </button>
  );
};

export default Tabs;
