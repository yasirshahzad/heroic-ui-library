/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable prefer-destructuring */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
var isDev = process.env.NODE_ENV === 'development';
var top = window.top;
var addKeyDownListener = function (handleOnKeyDown, dev) {
  var _a;
  if (dev === void 0) {
    dev = false;
  }
  if (dev) {
    window.addEventListener('keydown', handleOnKeyDown);
  } else if (!isDev && (top === null || top === void 0 ? void 0 : top.getCanvas) && typeof top.getCanvas == 'function') {
    (_a = top.getCanvas) === null || _a === void 0 ? void 0 : _a.call(top).addEventListener('keydown', handleOnKeyDown);
  }
};
var removeKeyDownListener = function (handleOnKeyDown, dev) {
  var _a;
  if (dev === void 0) {
    dev = false;
  }
  if (dev) {
    window.removeEventListener('keydown', handleOnKeyDown);
  } else if (!isDev && (top === null || top === void 0 ? void 0 : top.getCanvas) && typeof top.getCanvas == 'function') {
    (_a = top.getCanvas) === null || _a === void 0 ? void 0 : _a.call(top).removeEventListener('keydown', handleOnKeyDown);
  }
};
export { addKeyDownListener, isDev, removeKeyDownListener, top };
//# sourceMappingURL=index.js.map
