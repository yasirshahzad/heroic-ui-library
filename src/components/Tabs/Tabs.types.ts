import { HTMLAttributes } from 'react';

export interface TabsProps extends HTMLAttributes<HTMLButtonElement> {
  /**
   * Which type of Tag should be?
   */
  label: string;

  /**
   *Optinal disable button.
   */
  disable?: boolean;

  /**
   *Optinal Active/selected button.
   */
  selected?: boolean;
}
