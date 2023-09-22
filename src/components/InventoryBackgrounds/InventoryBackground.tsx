import React from 'react';
import styles from './InventoryBackground.module.css';
import { InventoryBackgroundProps } from './InventoryBackground.type';

const InventoryBackground = ({ size, geomatry, selected, equable }: InventoryBackgroundProps) => {
  const InventoryClasses = [
    styles.inventory__bg,
    styles[`inventory__bg--${size}`],
    styles[`inventory__bg--${geomatry}`],
    selected ? styles.inventory__bg__selected : equable ? styles.inventory__bg__equable : styles.inventory__bg__default,
  ].join(' ');

  return <div className={InventoryClasses}></div>;
};

export default InventoryBackground;
