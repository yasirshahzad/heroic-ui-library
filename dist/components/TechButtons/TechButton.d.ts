import React from 'react';
import './TechButton.css';
export interface TechButtonProps {
    btnType: 'green' | 'blue' | 'orange' | 'red' | 'lightblue' | 'gray';
    label: string;
    disable?: boolean;
    selected?: boolean;
}
export default function TechButton({ btnType, label, disable, selected, ...props }: TechButtonProps): React.JSX.Element;
