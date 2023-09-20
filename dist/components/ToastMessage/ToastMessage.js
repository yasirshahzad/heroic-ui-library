import { __assign } from '../../node_modules/tslib/tslib.es6.js';
import React from 'react';
import Notification from '../Notification/Notification.js';
import modules_f3beeb1a from './ToastMessage.module.css.js';
import warning from "../../assets/Burst_exclamation-warning-43db8ac6.webp";
var ToastMessage = function (_a) {
  var type = _a.type,
    statement = _a.statement,
    notification = _a.notification;
  return React.createElement("div", {
    className: modules_f3beeb1a.toast__wraper
  }, notification && React.createElement("div", {
    className: modules_f3beeb1a['toast-notification']
  }, React.createElement(Notification, __assign({}, notification))), React.createElement("div", {
    className: "".concat(modules_f3beeb1a['left-icon'], " ").concat(type === 'warning' ? modules_f3beeb1a.warning : '')
  }, type === 'warning' && React.createElement("img", {
    src: warning,
    alt: "Warning"
  })), React.createElement("h2", {
    className: modules_f3beeb1a.toast__statement
  }, statement), React.createElement("div", {
    className: modules_f3beeb1a.statement__box
  }), React.createElement("div", {
    className: [modules_f3beeb1a.box__shadow, modules_f3beeb1a["shadow--".concat(type)]].join(' ')
  }));
};
export { ToastMessage as default };
//# sourceMappingURL=ToastMessage.js.map
