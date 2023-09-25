import React from 'react';
import modules_6e2aa2b9 from '../StatusEffect.module.css.js';
var VehicleStats = function (_a) {
  var vehicleBuffs = _a.vehicleBuffs,
    VehicleStat = _a.VehicleStat;
  var validatedNumber = vehicleBuffs >= 0 ? vehicleBuffs : 0;
  return React.createElement("div", {
    className: modules_6e2aa2b9.stats__wrapper
  }, React.createElement("div", {
    className: modules_6e2aa2b9.stats__block
  }, React.createElement("div", {
    className: "".concat(modules_6e2aa2b9.stats__image, " ").concat(modules_6e2aa2b9["stats__image-".concat(VehicleStat)])
  }), React.createElement("h3", {
    className: "".concat(modules_6e2aa2b9.stats__buffs, " ").concat(modules_6e2aa2b9.stats__vehiclebuffs)
  }, validatedNumber)));
};
export { VehicleStats as default };
//# sourceMappingURL=VehicleStats.js.map
