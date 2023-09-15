import React from 'react';
import './Toastmessage.css';
import Notification from '../Notification/Notification';
import { ToastmessageProps } from './Tiastmessage.type';
const Toastmessage = ({ type, statement }: ToastmessageProps) => {
  return (
    <div className="toast__wraper">
      <div className="toast-notification">
        <Notification color="green" mark />
      </div>
      <h2 className="toast__statement">{statement}</h2>
      <div className="statement__box"></div>
      <div className={['box__shadow', `shadow--${type}`].join(' ')}></div>
    </div>
  );
};

export default Toastmessage;
