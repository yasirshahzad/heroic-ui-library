import { HTMLAttributes } from 'react';

export interface ToastmessageProps extends HTMLAttributes<HTMLElement> {
  type: 'interact' | 'warning' | 'misc';
  statement: string;
}
