// Notification.tsx
import React from 'react';
import styles from './Notification.module.css'; // Import CSS module
import { NotificationProps } from './Notification.types';

const Notification = ({ color, counter, mark }: NotificationProps) => {
  return (
    <div className={[styles.notification, styles[`notification--${color}`]].join(' ')}>
      <div className={styles.text}>{mark ? '!' : counter}</div>
    </div>
  );
};

export default Notification;
