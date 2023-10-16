export interface TechButtonProps {
    btnType: 'green' | 'blue' | 'orange' | 'red' | 'lightblue' | 'gray';
    label: string;
    disable?: boolean;
    selected?: boolean;
    className?: string;
}
