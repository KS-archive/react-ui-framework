"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var getValue = function getValue(variable) {
  var selector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'html';
  var variableName = variable.split(/(\(|\))/)[2];
  var styles = window.getComputedStyle(document.querySelector(selector));
  return styles.getPropertyValue(variableName);
};

var setValue = function setValue(variable, value) {
  var selector = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'html';
  var variableName = variable.includes('--') ? variable : "--".concat(variable);
  document.querySelector(selector).style.setProperty(variableName, value);
};

var _default = {
  getValue: getValue,
  setValue: setValue
};
exports.default = _default;