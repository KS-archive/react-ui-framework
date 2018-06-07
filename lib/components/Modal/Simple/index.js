"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactSizeme = _interopRequireDefault(require("react-sizeme"));

var _SVGIcon = _interopRequireDefault(require("../../SVGIcon"));

var _Button = _interopRequireDefault(require("../../Button"));

var _styles = require("../styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var REACT_ELEMENT_TYPE;

function _jsx(type, props, key, children) { if (!REACT_ELEMENT_TYPE) { REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; } var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = { children: void 0 }; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = new Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }

var sizeMeHOC = (0, _reactSizeme.default)({
  monitorWidth: false,
  monitorHeight: true,
  refreshRate: 100
});

var SimpleDialog = function SimpleDialog(_ref) {
  var animationName = _ref.animationName,
      animationType = _ref.animationType,
      buttons = _ref.buttons,
      children = _ref.children,
      color = _ref.color,
      duration = _ref.duration,
      icon = _ref.icon,
      onClose = _ref.onClose,
      showCloseButton = _ref.showCloseButton,
      size = _ref.size,
      title = _ref.title,
      width = _ref.width;
  return _jsx(_styles.StyledDialog, {
    width: width,
    duration: duration,
    animationName: animationName,
    animationType: animationType,
    color: color,
    overSize: window.innerHeight < size.height + 80
  }, void 0, showCloseButton && _jsx(_styles.CloseButton, {
    className: "fa fa-times",
    onClick: onClose
  }), _jsx(_styles.Header, {}, void 0, icon && _jsx(_SVGIcon.default, {
    path: icon,
    fill: color,
    width: 24,
    height: 24
  }), _jsx(_styles.Title, {}, void 0, title)), _jsx(_styles.Content, {}, void 0, children), buttons.length > 0 && _jsx(_styles.Footer, {}, void 0, buttons.map(function (button) {
    return _react.default.createElement(_Button.default, _extends({
      key: button.label,
      size: "sm"
    }, button));
  })));
};

var _default = sizeMeHOC(SimpleDialog);

exports.default = _default;