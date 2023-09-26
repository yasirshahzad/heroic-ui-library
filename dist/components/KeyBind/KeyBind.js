import React, { useEffect } from 'react';
import modules_20990a89 from './KeyBind.module.css.js';
import { addKeyDownListener, removeKeyDownListener } from '../../api/index.js';
var KeyBind = function (_a) {
  var seal = _a.seal,
    type = _a.type,
    _b = _a.dev,
    dev = _b === void 0 ? true : _b,
    onTrigger = _a.onTrigger;
  useEffect(function () {
    var listener = function (event) {
      if (event.key == seal) {
        onTrigger();
      }
    };
    addKeyDownListener(listener, dev);
    return function () {
      return removeKeyDownListener(listener, dev);
    };
  }, [dev, onTrigger, seal]);
  return React.createElement("div", {
    className: [modules_20990a89.keybind, modules_20990a89["keybind--".concat(type)]].join(' ')
  }, React.createElement("p", {
    className: modules_20990a89.seal
  }, seal));
};
export { KeyBind as default };
//# sourceMappingURL=KeyBind.js.map
