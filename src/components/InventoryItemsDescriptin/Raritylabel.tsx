/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import './Raritylabel.css';
import React from 'react';

interface RarityProps {
  rarity: number;
}

interface RarityObject {
  name: string;
  color: string;
}

export const ITEM_TYPE_NAMES_COLORS: any = {
  1: { name: 'Junk', color: 'junk' },
  2: { name: 'Common', color: 'grey' },
  3: { name: 'Uncommon', color: 'blue' },
  4: { color: 'green', name: 'Rare' },
  5: { color: 'orange', name: 'Legendary' },
  6: { color: 'red', name: 'Epic' },
};

const Raritylabel = ({ rarity }: RarityProps) => {
  const selectedRarity: RarityObject = ITEM_TYPE_NAMES_COLORS[rarity];

  return (
    <div className={[`rarity__label`, `rarity__label--${selectedRarity.color}`].join(' ')}>{selectedRarity.name} </div>
  );
};

export default Raritylabel;
