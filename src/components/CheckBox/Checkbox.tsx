import React from 'react';

import './Checkbox.css';
export interface CheckBoxProps {
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

export default function CheckBox({ size, selected, crossed, ...props }: CheckBoxProps) {
  return (
    <button className={['checkbox', `checkbox__${size}`].join(' ')} {...props}>
      <div
        className={[
          'checkbox__icon',
          `${selected ? `${crossed ? `checkbox__crossed` : `checkbox__checked`}` : `checkbox__default`}`,
        ].join(' ')}
      />
    </button>
  );
}
