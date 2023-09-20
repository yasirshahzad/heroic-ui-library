import { HTMLAttributes } from 'react';
export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    /**
     * Which type of button should be?
     */
    btnType: 'red' | 'blue' | 'green' | 'orange' | 'gray';
    /**
     * Button contents
     */
    label: string;
    /**
     * Optional click handler
     */
    onClick?: () => void;
    /**
     *Optinal disable button
     */
    disable?: boolean;
    /**
     *Optinal Active/selected button
     */
    selected?: boolean;
}
