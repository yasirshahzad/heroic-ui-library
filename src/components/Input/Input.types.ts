import { HTMLProps } from 'react';

export interface InputProps extends HTMLProps<HTMLInputElement> {
  /**
   * The value of in put filed
   */
  value?: string;

  /**
   * Input label
   */
  label?: string;

  /**
   * Error to display
   */
  error?: string;

  /**
   * Placeholder
   */
  placeholder?: string;
}
