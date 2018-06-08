"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var REACT_ELEMENT_TYPE;

function _jsx(type, props, key, children) { if (!REACT_ELEMENT_TYPE) { REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; } var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = { children: void 0 }; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = new Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }

var Button = function Button(_ref) {
  var children = _ref.children,
      className = _ref.className,
      ghost = _ref.ghost,
      kind = _ref.kind,
      label = _ref.label,
      onClick = _ref.onClick,
      size = _ref.size,
      style = _ref.style,
      type = _ref.type;
  var Component = ghost ? _styles.Ghost : _styles.Filled;
  return _jsx(Component, {
    type: type,
    onClick: onClick,
    kind: kind,
    className: className,
    size: size,
    style: style
  }, void 0, children || label);
};

Button.propTypes = {
  children: _propTypes.default.oneOfType([_propTypes.default.node, _propTypes.default.string]),
  className: _propTypes.default.string,
  ghost: _propTypes.default.bool,
  kind: _propTypes.default.oneOf(['primary', 'accent', 'white', 'info', 'success', 'error', 'warning', 'grey']),
  label: _propTypes.default.string,
  onClick: _propTypes.default.func,
  size: _propTypes.default.oneOf(['sm', 'md', 'lg']),
  style: _propTypes.default.object,
  type: _propTypes.default.oneOf(['button', 'submit', 'reset'])
};
Button.defaultProps = {
  children: '',
  className: '',
  ghost: false,
  kind: 'primary',
  label: '',
  onClick: function onClick() {},
  size: 'md',
  style: {},
  type: 'button'
};
var _default = Button;
exports.default = _default;