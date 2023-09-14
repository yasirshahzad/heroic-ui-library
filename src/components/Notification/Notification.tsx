import React from 'react';
import './Notification.css';
interface NotificationProps {
  color: 'green' | 'orange';
  counter?: number;
  mark: '!';
}

const Notification = ({ color, counter, mark }: NotificationProps) => {
  return (
    <div className={['notification', `notification--${color}`].join(' ')}>
      <div className="text">
        {counter}
        {mark}
      </div>
    </div>
  );
};

export default Notification;
