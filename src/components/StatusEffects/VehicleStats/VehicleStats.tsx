import React from 'react';
import styles from '../StatusEffect.module.css'; // Import the CSS module
import { VehicleStatProps } from './VehicleStats.type';

const VehicleStats = ({ vehicleBuffs, vehicleStat }: VehicleStatProps) => {
  const validatedNumber = vehicleBuffs >= 0 ? vehicleBuffs : 0;

  return (
    <div className={styles.stats__wrapper}>
      <div className={styles.stats__block}>
        <div className={`${styles.stats__image} ${styles[`stats__image-${vehicleStat}`]}`}></div>
        <h3 className={`${styles.stats__buffs} ${styles.stats__vehiclebuffs}`}>{validatedNumber}</h3>
      </div>
    </div>
  );
};

export default VehicleStats;
