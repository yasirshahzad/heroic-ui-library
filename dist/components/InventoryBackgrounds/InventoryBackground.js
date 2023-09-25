import React from 'react';
import modules_40f24d7a from './InventoryBackground.module.css.js';
var ITEM_TYPE_NAMES_IMAGE = {
  1: {
    name: 'Junk',
    img: 'purple'
  },
  2: {
    name: 'Common',
    img: 'grey'
  },
  3: {
    name: 'Uncommon',
    img: 'green'
  },
  4: {
    img: 'blue',
    name: 'Rare'
  },
  5: {
    img: 'orange',
    name: 'Legendary'
  },
  6: {
    img: 'red',
    name: 'Epic'
  },
  7: {
    img: 'empty',
    name: 'Empty'
  }
};
var InventoryBackground = function (_a) {
  var size = _a.size,
    geometry = _a.geometry,
    selected = _a.selected,
    equable = _a.equable,
    object = _a.object;
  _a.img;
  var selectedInventory = ITEM_TYPE_NAMES_IMAGE[object];
  var InventoryBgClasses = [modules_40f24d7a.inventory__bg, modules_40f24d7a["inventory__bg--".concat(size)], modules_40f24d7a["inventory__bg--".concat(geometry)], selected ? modules_40f24d7a.inventory__bg__selected : equable ? modules_40f24d7a.inventory__bg__equable : modules_40f24d7a.inventory__bg__default].join(' ');
  return React.createElement("div", {
    className: InventoryBgClasses
  }, React.createElement("div", {
    className: [modules_40f24d7a.inventory__img, modules_40f24d7a["inventory__bg--".concat(selectedInventory.img)]].join(' ')
  }));
};
export { ITEM_TYPE_NAMES_IMAGE, InventoryBackground as default };
//# sourceMappingURL=InventoryBackground.js.map
