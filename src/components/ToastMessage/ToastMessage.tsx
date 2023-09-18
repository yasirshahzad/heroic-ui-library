import React from 'react';
import Notification from '../Notification';
import { ToastMessageProps } from './ToastMessage.type';
import styles from './ToastMessage.module.css'; // Import the CSS Module
import warning from '../../assets/Burst_exclamation-warning.webp';

const ToastMessage = ({ type, statement, notification }: ToastMessageProps) => {
  return (
    <div className={styles.toast__wraper}>
      {notification && (
        <div className={styles['toast-notification']}>
          <Notification {...notification} />
        </div>
      )}

      <div className={`${styles['left-icon']} ${type === 'warning' ? styles.warning : ''}`}>
        {type === 'warning' && <img src={warning} alt="Warning" />}
      </div>

      <h2 className={styles.toast__statement}>{statement}</h2>
      <div className={styles.statement__box}></div>
      <div className={[styles.box__shadow, styles[`shadow--${type}`]].join(' ')}></div>
    </div>
  );
};

export default ToastMessage;
