import React from 'react';
import modules_a6103cab from './GeneralLabel.module.css.js';
var GeneralLabel = function (_a) {
  var text = _a.text,
    className = _a.className;
  var classes = "".concat(modules_a6103cab.label_container, " ").concat(modules_a6103cab.gen__label);
  if (className) classes += " ".concat(className);
  return React.createElement("div", {
    className: classes
  }, text);
};
export { GeneralLabel as default };
//# sourceMappingURL=GeneralLabel.js.map
