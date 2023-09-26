import React from 'react';
import modules_c5737f33 from './RarityLabel.module.css.js';

/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
// RarityLabel.tsx
var ITEM_TYPE_NAMES_COLORS = {
  1: {
    name: 'Junk',
    color: 'junk'
  },
  2: {
    name: 'Common',
    color: 'grey'
  },
  3: {
    name: 'Uncommon',
    color: 'blue'
  },
  4: {
    color: 'green',
    name: 'Rare'
  },
  5: {
    color: 'orange',
    name: 'Legendary'
  },
  6: {
    color: 'red',
    name: 'Epic'
  }
};
var RarityLabel = function (_a) {
  var rarity = _a.rarity;
  var selectedRarity = ITEM_TYPE_NAMES_COLORS[rarity];
  return React.createElement("div", {
    className: [modules_c5737f33.rarity__label, modules_c5737f33["rarity__label--".concat(selectedRarity.color)]].join(' ')
  }, selectedRarity.name);
};
export { ITEM_TYPE_NAMES_COLORS, RarityLabel as default };
//# sourceMappingURL=RarityLabel.js.map
