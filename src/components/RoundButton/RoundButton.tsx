import React from 'react';
import { RoundButtonProps } from './RoundButton.types';
import './RoundButton.css';

export const RoundButton = ({ size, btnType, selected, disable, ...props }: RoundButtonProps) => {
  return (
    <button disabled={disable} className={['btn__round', `btn__round__${size}`].join(' ')} {...props}>
      <div
        className={[
          'btn__round__icon',
          `btn__round--${btnType}`,
          `${selected ? `btn__round--selected--${btnType}` : ''}`,
        ].join(' ')}
      />
    </button>
  );
};
