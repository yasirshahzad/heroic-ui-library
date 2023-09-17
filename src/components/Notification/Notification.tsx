import React from 'react';
import { NotificationProps } from './Notification.types';
import './Notification.css';

const Notification = ({ color, counter, mark }: NotificationProps) => {
  return (
    <div className={['notification', `notification--${color}`].join(' ')}>
      <div className="text">{mark ? '!' : counter}</div>
    </div>
  );
};

export default Notification;
