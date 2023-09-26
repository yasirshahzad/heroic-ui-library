export interface InventoryBackgroundProps {
    object: '1' | '2' | '3' | '4' | '5' | '6';
    size: 'small' | 'medium' | 'large';
    geometry: 'circle' | 'square';
    selected: boolean;
    equable: boolean;
    img: string;
}
export interface Inventory {
    name: string;
    img: string;
}
