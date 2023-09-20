import { __rest, __assign } from '../../node_modules/tslib/tslib.es6.js';
import React from 'react';
import modules_86dbee05 from './RoundButton.module.css.js';
var RoundButton = function (_a) {
  var size = _a.size,
    btnType = _a.btnType,
    selected = _a.selected,
    _b = _a.disabled,
    disabled = _b === void 0 ? false : _b,
    className = _a.className,
    props = __rest(_a, ["size", "btnType", "selected", "disabled", "className"]);
  return React.createElement("button", __assign({
    disabled: disabled,
    className: [modules_86dbee05.btn__round, modules_86dbee05["btn__round__".concat(size)], className].join(' ')
  }, props), React.createElement("div", {
    className: [modules_86dbee05.btn__round__icon, selected ? modules_86dbee05["btn__round--selected--".concat(btnType)] : disabled ? modules_86dbee05["btn__round--disabled--".concat(btnType)] : modules_86dbee05["btn__round--".concat(btnType)]].join(' ')
  }));
};
export { RoundButton as default };
//# sourceMappingURL=RoundButton.js.map
