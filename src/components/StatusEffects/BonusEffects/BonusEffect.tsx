import React from 'react';
import styles from '../StatusEffect.module.css'; // Import the CSS module
import { BonusEffectProps } from './BonusEffect.type';

const BonusEffects = ({ BonusText, BonusType }: BonusEffectProps) => {
  return (
    <div className={styles.stats__wrapper}>
      <div className={styles.stats__block}>
        <div className={`${styles.stats__image} ${styles[`stats__image-${BonusType}`]}`}></div>
        <h3 className={`${styles.stats__buffs} ${styles[`stats__bonus-${BonusType}`]}`}>{BonusText}</h3>
      </div>
    </div>
  );
};

export default BonusEffects;
