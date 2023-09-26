import { __rest, __assign } from '../../node_modules/tslib/tslib.es6.js';
import React from 'react';
import modules_cb9fc6dd from './TechButton.module.css.js';
function TechButton(_a) {
  var btnType = _a.btnType,
    label = _a.label,
    disable = _a.disable,
    selected = _a.selected,
    props = __rest(_a, ["btnType", "label", "disable", "selected"]);
  return React.createElement("button", __assign({
    disabled: disable,
    className: [modules_cb9fc6dd.btn__tech, modules_cb9fc6dd["btn__tech--".concat(btnType)], selected ? modules_cb9fc6dd["selected--".concat(btnType)] : '' // Conditionally apply selected class
    ].join(' ')
  }, props), React.createElement("div", {
    className: modules_cb9fc6dd.btn__tech__text
  }, label));
}
export { TechButton as default };
//# sourceMappingURL=TechButton.js.map
