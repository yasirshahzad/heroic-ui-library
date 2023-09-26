import React from 'react';
import modules_536e8d56 from '../Label.module.css.js';
var RotatedLabel = function (_a) {
  var color = _a.color,
    text = _a.text;
  return React.createElement("div", {
    className: "".concat(modules_536e8d56.label_container, " ").concat(modules_536e8d56.tech_rotated, " ").concat(modules_536e8d56.rotated__label, "  ").concat(modules_536e8d56["rotated__label__".concat(color)])
  }, React.createElement("div", {
    className: modules_536e8d56.rotated__label__text
  }, text));
};
export { RotatedLabel as default };
//# sourceMappingURL=RotatedLabel.js.map
