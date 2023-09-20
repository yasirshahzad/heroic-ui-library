import React from 'react';
import modules_2904f848 from './Tab.module.css.js';
var Tabs = function (_a) {
  var label = _a.label,
    disable = _a.disable,
    selected = _a.selected;
  return React.createElement("button", {
    disabled: disable,
    className: "".concat(modules_2904f848.btn__tabs, " ").concat(selected ? modules_2904f848['btn__tabs--selected'] : '')
  }, label);
};
export { Tabs as default };
//# sourceMappingURL=Tab.js.map
