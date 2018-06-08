"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _react = _interopRequireDefault(require("react"));

var _reduxForm = require("redux-form");

var _components = _interopRequireDefault(require("./components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _default(_ref) {
  var name = _ref.name,
      className = _ref.className,
      extend = _ref.extend,
      type = _ref.type;
  var field = this.props.fields[name];
  var compType = type || field.type;
  var properties = {
    name: name,
    // Name specified in component.
    className: "".concat(field.className || '', " ").concat(className || ''),
    // Class from formConfig and component.
    component: _components.default[compType],
    // Name of component from components folder.
    props: _objectSpread({}, field.extend, extend) // Data from formConfig and component.

  };
  return _react.default.createElement(_reduxForm.Field, properties);
}