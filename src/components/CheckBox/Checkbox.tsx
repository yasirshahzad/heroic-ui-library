import React from 'react';
import './checkbox.css';
import { CheckBoxProps } from './Checkbox.types';

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
