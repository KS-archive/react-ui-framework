"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reapop = require("reapop");

var _reactRedux = require("react-redux");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default(WrappedComponent) {
  var Component = (0, _reactRedux.connect)(null, {
    notify: _reapop.notify
  })(WrappedComponent);
  return function (props) {
    return _react.default.createElement(Component, props);
  };
};

exports.default = _default;