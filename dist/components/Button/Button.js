import { __rest, __assign } from '../../node_modules/tslib/tslib.es6.js';
import React from 'react';
import modules_b0070f27 from './Button.module.css.js';
function Button(_a) {
  var btnType = _a.btnType,
    label = _a.label,
    disable = _a.disable,
    selected = _a.selected,
    className = _a.className,
    props = __rest(_a, ["btnType", "label", "disable", "selected", "className"]);
  var buttonClasses = [modules_b0070f27.btn, modules_b0070f27["btn-".concat(btnType)], selected ? modules_b0070f27["selected-".concat(btnType)] : '', className ? className : ''];
  return React.createElement("button", __assign({
    disabled: disable,
    className: buttonClasses.join(' ')
  }, props), React.createElement("div", {
    className: modules_b0070f27.btn_text
  }, label));
}
export { Button as default };
//# sourceMappingURL=Button.js.map
