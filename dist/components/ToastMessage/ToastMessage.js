import { __assign } from '../../node_modules/tslib/tslib.es6.js';
import React from 'react';
import Notification from '../Notification/Notification.js';
import modules_f3beeb1a from './ToastMessage.module.css.js';
import warning from "../../assets/Burst_exclamation-warning-43db8ac6.webp";
import greenBg from "../../assets/Icn_InventoryBG-Square-Green-7f734ab4.svg";
var ToastMessage = function (_a) {
  var type = _a.type,
    statement = _a.statement,
    notification = _a.notification,
    LeftItem = _a.leftItem;
  return React.createElement("div", {
    className: modules_f3beeb1a.toast__wraper
  }, notification && React.createElement("div", {
    className: modules_f3beeb1a['toast-notification']
  }, React.createElement(Notification, __assign({}, notification))), React.createElement("div", {
    className: "".concat(modules_f3beeb1a['left-icon'])
  }, type === 'warning' && React.createElement("img", {
    className: modules_f3beeb1a.warning,
    src: warning,
    alt: "Warning"
  }), type === 'interact' && React.createElement("div", {
    className: modules_f3beeb1a['interact-img-cont'],
    style: {
      backgroundImage: "url(".concat(greenBg, ")")
    }
  }, React.createElement("div", {
    className: modules_f3beeb1a.label
  }, "Press"), React.createElement("span", {
    className: modules_f3beeb1a.letter
  }, "F")), type === 'reward' && LeftItem && React.createElement(LeftItem, null)), React.createElement("h2", {
    className: modules_f3beeb1a.toast__statement
  }, statement), React.createElement("div", {
    className: modules_f3beeb1a.statement__box
  }), React.createElement("div", {
    className: [modules_f3beeb1a.box__shadow, modules_f3beeb1a["shadow--".concat(type)]].join(' ')
  }));
};
export { ToastMessage as default };
//# sourceMappingURL=ToastMessage.js.map
