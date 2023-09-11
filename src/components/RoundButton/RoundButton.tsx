import React from 'react';
import { RoundButtonProps } from './RoundButton.types';
import './RoundButton.css';

export const RoundButton = ({ size, btnType, selected, disabled = false, ...props }: RoundButtonProps) => {
  return (
    <button disabled={disabled} className={['btn__round', `btn__round__${size}`].join(' ')} {...props}>
      <div
        className={[
          'btn__round__icon',
          `${selected ? `btn__round--selected--${btnType}` : `btn__round--${btnType}`}`,
          `${disabled ? `btn__round--disabled--${btnType}` : ''}`,
        ].join(' ')}
      />
    </button>
  );
};
