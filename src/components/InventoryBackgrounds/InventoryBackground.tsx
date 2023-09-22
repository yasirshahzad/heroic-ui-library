/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
// RarityLabel.tsx

import React from 'react';
import styles from './InventoryBackground.module.css';
import { Inventory, InventoryBackgroundProps } from './InventoryBackground.type';

export const ITEM_TYPE_NAMES_IMAGE: any = {
  1: { name: 'Junk', img: 'purple' },
  2: { name: 'Common', img: 'grey' },
  3: { name: 'Uncommon', img: 'green' },
  4: { img: 'blue', name: 'Rare' },
  5: { img: 'orange', name: 'Legendary' },
  6: { img: 'red', name: 'Epic' },
  7: { img: 'empty', name: 'Empty' },
};

const InventoryBackground = ({ size, geomatry, selected, equable, object, img }: InventoryBackgroundProps) => {
  const selectedInventory: Inventory = ITEM_TYPE_NAMES_IMAGE[object];

  const InventoryBgClasses = [
    styles.inventory__bg,
    styles[`inventory__bg--${size}`],
    styles[`inventory__bg--${geomatry}`],
    selected ? styles.inventory__bg__selected : equable ? styles.inventory__bg__equable : styles.inventory__bg__default,
  ].join(' ');

  return (
    <div className={InventoryBgClasses}>
      <div className={styles[`inventory__bg--${selectedInventory.img}`]}></div>
    </div>
  );
};

export default InventoryBackground;
