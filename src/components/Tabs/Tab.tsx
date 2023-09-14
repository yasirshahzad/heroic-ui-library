import React from 'react';
import './Tab.css';
import { TabsProps } from './Tabs.types';

export const Tabs = ({ label, disable, selected }: TabsProps) => {
  return (
    <button disabled={disable} className={['btn__tabs', `${selected ? `btn__tabs--selected` : ''}`].join(' ')}>
      {label}
    </button>
  );
};

export default Tabs;
