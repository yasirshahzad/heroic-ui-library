import React from 'react';
import Notification from '../Notification';
import { ToastMessageProps } from './ToastMessage.type';
import styles from './ToastMessage.module.css'; // Import the CSS Module
import warning from '../../assets/Burst_exclamation-warning.webp';
import greenBg from '../../assets/inventory-states/Icn_InventoryBG-Square-Green.svg';

const ToastMessage = ({ type, statement, notification, leftItem: LeftItem }: ToastMessageProps) => {
  return (
    <div className={styles.toast__wraper}>
      {notification && (
        <div className={styles['toast-notification']}>
          <Notification {...notification} />
        </div>
      )}

      <div className={`${styles['left-icon']}`}>
        {type === 'warning' && <img className={styles.warning} src={warning} alt="Warning" />}
        {type === 'interact' && (
          <div className={styles['interact-img-cont']} style={{ backgroundImage: `url(${greenBg})` }}>
            <div className={styles.label}>Press</div>
            <span className={styles.letter}>F</span>
          </div>
        )}
        {type === 'reward' && LeftItem && <LeftItem />}
      </div>

      <h2 className={styles.toast__statement}>{statement}</h2>
      <div className={styles.statement__box}></div>
      <div className={[styles.box__shadow, styles[`shadow--${type}`]].join(' ')}></div>
    </div>
  );
};

export default ToastMessage;
