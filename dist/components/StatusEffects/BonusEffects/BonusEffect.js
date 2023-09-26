import React from 'react';
import modules_6e2aa2b9 from '../StatusEffect.module.css.js';
var BonusEffects = function (_a) {
  var bonusText = _a.bonusText,
    bonusType = _a.bonusType;
  return React.createElement("div", {
    className: modules_6e2aa2b9.stats__wrapper
  }, React.createElement("div", {
    className: modules_6e2aa2b9.stats__block
  }, React.createElement("div", {
    className: "".concat(modules_6e2aa2b9.stats__image, " ").concat(modules_6e2aa2b9["stats__image-".concat(bonusType)])
  }), React.createElement("h3", {
    className: "".concat(modules_6e2aa2b9.stats__buffs, " ").concat(modules_6e2aa2b9["stats__bonus-".concat(bonusType)])
  }, bonusText)));
};
export { BonusEffects as default };
//# sourceMappingURL=BonusEffect.js.map
