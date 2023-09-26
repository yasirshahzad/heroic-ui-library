import React from 'react';
import { Inventory, InventoryBackgroundProps } from './InventoryBackground.type';
export declare const ITEM_TYPE_NAMES_IMAGE: {
    [key: number]: Inventory;
};
declare const InventoryBackground: ({ size, geometry, selected, equable, object, img }: InventoryBackgroundProps) => React.JSX.Element;
export default InventoryBackground;
