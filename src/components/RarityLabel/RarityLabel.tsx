/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
// RarityLabel.tsx
import React from 'react';
import styles from './RarityLabel.module.css'; // Import CSS module
import { Rarity, RarityProps } from './Rarity.types';

export const ITEM_TYPE_NAMES_COLORS: any = {
  1: { name: 'Junk', color: 'junk' },
  2: { name: 'Common', color: 'grey' },
  3: { name: 'Uncommon', color: 'blue' },
  4: { color: 'green', name: 'Rare' },
  5: { color: 'orange', name: 'Legendary' },
  6: { color: 'red', name: 'Epic' },
};

const RarityLabel = ({ rarity }: RarityProps) => {
  const selectedRarity: Rarity = ITEM_TYPE_NAMES_COLORS[rarity];

  return (
    <div className={[styles.rarity__label, styles[`rarity__label--${selectedRarity.color}`]].join(' ')}>
      {selectedRarity.name}
    </div>
  );
};

export default RarityLabel;
