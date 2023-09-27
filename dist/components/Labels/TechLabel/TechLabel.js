import React from 'react';
import modules_15049d6a from './TechLabel.module.css.js';
var TechLabel = function (_a) {
  var text = _a.text,
    className = _a.className;
  var classes = "".concat(modules_15049d6a.label_container, " ").concat(modules_15049d6a.tech_rotated, " ").concat(modules_15049d6a.tech__label);
  if (className) classes += " ".concat(className);
  return React.createElement("div", {
    className: classes
  }, text);
};
export { TechLabel as default };
//# sourceMappingURL=TechLabel.js.map
