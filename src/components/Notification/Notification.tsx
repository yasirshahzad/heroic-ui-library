import React from 'react';
import './Notification.css';
import { NotificationProps } from './Notification.types';

const Notification = ({ color, counter, mark }: NotificationProps) => {
  return (
    <div className={['notification', `notification--${color}`].join(' ')}>
      <div className="text">{mark ? '!' : counter}</div>
    </div>
  );
};

export default Notification;
