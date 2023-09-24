export interface InventoryBackgroundProps {
  object: 1 | '1' | 2 | '2' | 3 | '3' | 4 | '4' | 5 | '5' | 6 | '6';
  size: 'small' | 'medium' | 'large';
  geomatry: 'circle' | 'square';
  selected: boolean;
  equable: boolean;
  img: string;
}
export interface Inventory {
  name: string;
  img: string;
}
