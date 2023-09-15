import { HTMLAttributes } from 'react';
import { NotificationProps } from '../Notification';

export interface ToastMessageProps extends HTMLAttributes<HTMLElement> {
  type: 'interact' | 'warning' | 'misc';
  statement: string;
  notification?: NotificationProps;
}
