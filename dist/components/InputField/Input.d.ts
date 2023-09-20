import React from 'react';
import './input.css';
import { InputProps } from './Input.types';
/**
 *  UI component for user interaction
 */
declare const Input: ({ value, label, error, placeholder, ...props }: InputProps) => React.JSX.Element;
export default Input;
