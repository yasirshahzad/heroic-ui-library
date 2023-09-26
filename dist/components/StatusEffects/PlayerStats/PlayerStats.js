import React from 'react';
import modules_6e2aa2b9 from '../StatusEffect.module.css.js';
var PlayerStats = function (_a) {
  var buffs = _a.buffs,
    stats = _a.stats;
  return React.createElement("div", {
    className: modules_6e2aa2b9.stats__wrapper
  }, React.createElement("div", {
    className: modules_6e2aa2b9.stats__block
  }, React.createElement("div", {
    className: [modules_6e2aa2b9.stats__image, modules_6e2aa2b9["stats__image-".concat(stats)]].join(' ')
  }), React.createElement("h3", {
    className: "".concat(modules_6e2aa2b9.stats__buffs, " ").concat(buffs === 0 ? modules_6e2aa2b9['uneffected-buffs'] : buffs > 0 ? modules_6e2aa2b9['green-buffs'] : modules_6e2aa2b9['red-buffs'])
  }, Math.abs(buffs))));
};
export { PlayerStats as default };
//# sourceMappingURL=PlayerStats.js.map
