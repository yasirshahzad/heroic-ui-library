import React, { useEffect } from 'react';
import styles from './KeyBind.module.css';
import { KeyBindProps } from './KeyBind.type';
import { addKeyDownListener, removeKeyDownListener } from 'src/api';

const KeyBind = ({ seal, type, dev = true, onTrigger }: KeyBindProps) => {
  useEffect(() => {
    const listener = (event: KeyboardEvent) => {
      if (event.key == seal) {
        onTrigger();
      }
    };

    addKeyDownListener(listener, dev);

    return () => removeKeyDownListener(listener, dev);
  }, [dev, onTrigger, seal]);

  return (
    <div className={[styles.keybind, styles[`keybind--${type}`]].join(' ')}>
      <p className={styles.seal}>{seal}</p>
    </div>
  );
};

export default KeyBind;
