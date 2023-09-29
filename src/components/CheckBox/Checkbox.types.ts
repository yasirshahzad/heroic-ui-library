import { HTMLAttributes } from 'react';

export interface CheckBoxProps extends HTMLAttributes<HTMLButtonElement> {
  /**
   * Which size of button should be?
   */
  size: 'small' | 'medium' | 'large';
  /**
   * When checkbox selected checked.
   */
  selected?: boolean;
  /**
   * When checkbox selected crossed.
   */
  crossed?: boolean;
}
