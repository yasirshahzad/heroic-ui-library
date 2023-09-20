import { __rest, __assign } from '../../node_modules/tslib/tslib.es6.js';
import React from 'react';
import './TechButton.css.js';
function TechButton(_a) {
  var btnType = _a.btnType,
    label = _a.label,
    disable = _a.disable,
    selected = _a.selected,
    props = __rest(_a, ["btnType", "label", "disable", "selected"]);
  return React.createElement("button", __assign({
    disabled: disable,
    className: ['btn__tech', "btn__tech--".concat(btnType), "".concat(selected ? "selected--".concat(btnType) : '')].join(' ')
  }, props), React.createElement("div", {
    className: "btn__tech__text"
  }, label));
}
export { TechButton as default };
//# sourceMappingURL=TechButton.js.map
