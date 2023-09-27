import React from 'react';
import modules_3b9ef507 from './RotedLabel.module.css.js';
var RotatedLabel = function (_a) {
  var color = _a.color,
    text = _a.text,
    className = _a.className;
  var classes = "".concat(modules_3b9ef507.rotated__label, " ").concat(modules_3b9ef507["rotated__label__".concat(color)]);
  if (className) classes += " ".concat(className);
  return React.createElement("div", {
    className: classes
  }, React.createElement("div", {
    className: modules_3b9ef507.rotated__label__text
  }, text));
};
export { RotatedLabel as default };
//# sourceMappingURL=RotatedLabel.js.map
