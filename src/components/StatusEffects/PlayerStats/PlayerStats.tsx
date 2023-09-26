import React from 'react';
import styles from '../StatusEffect.module.css'; // Import the CSS module
import { StatusEffectProps } from './PlayerStats.types';

const PlayerStats = ({ buffs, stats }: StatusEffectProps) => {
  return (
    <div className={styles.stats__wrapper}>
      <div className={styles.stats__block}>
        <div className={[styles.stats__image, styles[`stats__image-${stats}`]].join(' ')}></div>

        <h3
          className={`${styles.stats__buffs} ${
            buffs === 0 ? styles['uneffected-buffs'] : buffs > 0 ? styles['green-buffs'] : styles['red-buffs']
          }`}
        >
          {Math.abs(buffs)}
        </h3>
      </div>
    </div>
  );
};

export default PlayerStats;
