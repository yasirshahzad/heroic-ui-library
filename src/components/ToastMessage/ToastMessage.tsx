import React from 'react';
import Notification from '../Notification';
import { ToastMessageProps } from './ToastMessage.type';
import './ToastMessage.css';

import warning from '../../assets/Burst_exclamation-warning.webp';

const ToastMessage = ({ type, statement, notification }: ToastMessageProps) => {
  return (
    <div className="toast__wraper">
      {notification && (
        <div className="toast-notification">
          <Notification {...notification} />
        </div>
      )}

      {<div className="left-icon">{type == 'warning' && <img src={warning} />}</div>}

      <h2 className="toast__statement">{statement}</h2>
      <div className="statement__box"></div>
      <div className={['box__shadow', `shadow--${type}`].join(' ')}></div>
    </div>
  );
};

export default ToastMessage;
