"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default(tagName, attributes) {
  var element = document.createElement(tagName);
  var head = document.querySelector('head');
  var items = head.querySelectorAll('*');
  var firstItem = items[0];
  Object.keys(attributes).map(function (key) {
    element.setAttribute(key, attributes[key]);
  });
  head.insertBefore(element, firstItem);
};

exports.default = _default;