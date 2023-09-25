import React from 'react';
import styles from './KeyBind.module.css';
import { KeyBindProps } from './KeyBind.type';

const KeyBind = ({ seal, type }: KeyBindProps) => {
  return (
    <div className={[styles.keybind, styles[`keybind--${type}`]].join(' ')}>
      <p className={styles.seal}>{seal}</p>
    </div>
  );
};

export default KeyBind;
