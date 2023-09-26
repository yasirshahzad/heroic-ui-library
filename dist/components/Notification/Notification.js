import React from 'react';
import modules_7a49ee3d from './Notification.module.css.js';

// Notification.tsx
var Notification = function (_a) {
  var color = _a.color,
    counter = _a.counter,
    mark = _a.mark;
  return React.createElement("div", {
    className: [modules_7a49ee3d.notification, modules_7a49ee3d["notification--".concat(color)]].join(' ')
  }, React.createElement("div", {
    className: modules_7a49ee3d.text
  }, mark ? '!' : counter));
};
export { Notification as default };
//# sourceMappingURL=Notification.js.map
