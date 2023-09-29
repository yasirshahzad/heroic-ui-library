import { __rest, __assign } from '../../node_modules/tslib/tslib.es6.js';
import React from 'react';
import modules_3d9ddf8b from './Checkbox.module.css.js';
function CheckBox(_a) {
  var size = _a.size,
    selected = _a.selected,
    crossed = _a.crossed,
    className = _a.className,
    props = __rest(_a, ["size", "selected", "crossed", "className"]);
  var checkboxClasses = [modules_3d9ddf8b.checkbox, modules_3d9ddf8b["checkbox__".concat(size)], className ? className : ''].join(' ');
  var iconClasses = [modules_3d9ddf8b.checkbox__icon, selected ? crossed ? modules_3d9ddf8b.checkbox__crossed : modules_3d9ddf8b.checkbox__checked : modules_3d9ddf8b.checkbox__default].join(' ');
  return React.createElement("button", __assign({
    className: checkboxClasses
  }, props), React.createElement("div", {
    className: iconClasses
  }));
}
export { CheckBox as default };
//# sourceMappingURL=Checkbox.js.map
