// RoundButton.tsx
import React from 'react';
import styles from './RoundButton.module.css'; // Import CSS module
import { RoundButtonProps } from './RoundButton.types';

const RoundButton = ({ size, btnType, selected, disabled = false, className, ...props }: RoundButtonProps) => {
  return (
    <button
      disabled={disabled}
      className={[styles.btn__round, styles[`btn__round__${size}`], className].join(' ')}
      {...props}
    >
      <div
        className={[
          styles.btn__round__icon,
          selected
            ? styles[`btn__round--selected--${btnType}`]
            : disabled
            ? styles[`btn__round--disabled--${btnType}`]
            : styles[`btn__round--${btnType}`],
        ].join(' ')}
      />
    </button>
  );
};

export default RoundButton;
