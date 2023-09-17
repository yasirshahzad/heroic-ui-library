import React from 'react';
import { RoundButtonProps } from './RoundButton.types';
import './RoundButton.css';

const RoundButton = ({ size, btnType, selected, disabled = false, className, ...props }: RoundButtonProps) => {
  return (
    <button disabled={disabled} className={['btn__round', `btn__round__${size}`, className].join(' ')} {...props}>
      <div
        className={[
          'btn__round__icon',
          `${
            selected
              ? `btn__round--selected--${btnType}`
              : `${disabled ? `btn__round--disabled--${btnType}` : `btn__round--${btnType}`}`
          }`,
        ].join(' ')}
      />
    </button>
  );
};

export default RoundButton;
