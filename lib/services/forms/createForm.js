"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reduxForm = require("redux-form");

var _initializeForm = _interopRequireDefault(require("./initializeForm"));

var _validate = _interopRequireDefault(require("./validate"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = function _default(form) {
  var fields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var rest = arguments.length > 2 ? arguments[2] : undefined;
  return function (WrappedComponent) {
    var WC = (0, _reduxForm.reduxForm)(_objectSpread({
      form: form,
      validate: (0, _validate.default)(fields)
    }, rest))(WrappedComponent);

    var Component = function Component(props) {
      return _react.default.createElement(WC, _extends({
        initializeForm: _initializeForm.default,
        fields: fields
      }, props));
    };

    return Component;
  };
};

exports.default = _default;