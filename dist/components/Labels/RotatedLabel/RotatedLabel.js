import React from 'react';
import modules_3b9ef507 from './RotedLabel.module.css.js';
var RotatedLabel = function (_a) {
  var color = _a.color,
    text = _a.text;
  return React.createElement("div", {
    className: "".concat(modules_3b9ef507.label_container, " ").concat(modules_3b9ef507.tech_rotated, " ").concat(modules_3b9ef507.rotated__label, "  ").concat(modules_3b9ef507["rotated__label__".concat(color)])
  }, React.createElement("div", {
    className: modules_3b9ef507.rotated__label__text
  }, text));
};
export { RotatedLabel as default };
//# sourceMappingURL=RotatedLabel.js.map
