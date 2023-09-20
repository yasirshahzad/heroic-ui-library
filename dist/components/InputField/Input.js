import { __rest, __assign } from '../../node_modules/tslib/tslib.es6.js';
import React from 'react';
import './input.css.js';

/**
 *  UI component for user interaction
 */
var Input = function (_a) {
  var value = _a.value,
    label = _a.label,
    error = _a.error,
    placeholder = _a.placeholder,
    props = __rest(_a, ["value", "label", "error", "placeholder"]);
  return React.createElement("div", null, React.createElement("label", {
    htmlFor: "",
    className: "input__label"
  }, label), React.createElement("input", __assign({
    value: value,
    placeholder: placeholder,
    className: "input"
  }, props)), error && React.createElement("div", {
    className: "error"
  }, error));
};
export { Input as default };
//# sourceMappingURL=Input.js.map
