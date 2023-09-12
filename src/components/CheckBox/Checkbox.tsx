import React from 'react';

import './Checkbox.css';
export interface CheckBoxProps {
  Type?: string;
  selected?: boolean;
  checked?: boolean;
  crossed?: boolean;
  size: 'small' | 'medium' | 'large';
}

export default function CheckBox({ Type, size, selected, checked, crossed, ...props }: CheckBoxProps) {
  return (
    <button className={['checkbox', `checkbox__${size}`].join(' ')} {...props}>
      <div
        className={[
          'checkbox__icon',
          `${
            selected
              ? `checkbox--selected--${Type}`
              : `${crossed ? `btn__round--disabled--${Type}` : `btn__round--${Type}`}`
          }`,
        ].join(' ')}
      />
    </button>
  );
}
