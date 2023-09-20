import n from '../../node_modules/rollup-plugin-styles/dist/runtime/inject-css.js';
var css = ".notification {\n  background-repeat: no-repeat;\n  background-size: 100% 100%;\n  min-width: 5rem;\n  min-height: 5rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.text {\n  text-align: center;\n  line-height: 1.5;\n  font-size: 3rem;\n  text-shadow: 1px 1px black;\n  -webkit-text-stroke-width: 1px;\n  -webkit-text-stroke-color: black;\n  color: white;\n  font-family: 'Brady Bunch Remastered';\n  padding: 0rem 2rem;\n}\n\n.notification--green {\n  background-image: url('/src/assets/notification/Notification_green.svg');\n}\n.notification--orange {\n  background-image: url('/src/assets/notification/Notification_orange.svg');\n}\n";
n(css, {});
export { css, css as default };
//# sourceMappingURL=Notification.css.js.map
