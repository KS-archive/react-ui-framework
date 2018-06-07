"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactMdSpinner = _interopRequireDefault(require("react-md-spinner"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var REACT_ELEMENT_TYPE;

function _jsx(type, props, key, children) { if (!REACT_ELEMENT_TYPE) { REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; } var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = { children: void 0 }; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = new Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }

var sizes = {
  xs: 8,
  sm: 16,
  md: 32,
  lg: 48,
  xl: 64,
  xxl: 96
};

var Spinner = function Spinner(_ref) {
  var className = _ref.className,
      colors = _ref.colors,
      duration = _ref.duration,
      size = _ref.size,
      style = _ref.style;
  return _jsx(_reactMdSpinner.default, {
    className: className,
    duration: duration,
    size: sizes[size],
    style: style,
    color1: colors[0],
    color2: colors[1] || colors[0],
    color3: colors[2] || colors[1] || colors[0],
    color4: colors[3] || colors[2] || colors[1] || colors[0]
  });
};

Spinner.propTypes = {
  className: _propTypes.default.string,
  colors: _propTypes.default.arrayOf(_propTypes.default.string),
  duration: _propTypes.default.number,
  size: _propTypes.default.oneOf(['xs', 'sm', 'md', 'lg', 'xl', 'xxl']),
  style: _propTypes.default.object
};
Spinner.defaultProps = {
  className: '',
  colors: ['var(--primary1)', 'var(--primary2)', 'var(--primary3)', 'var(--primary2)'],
  duration: 1200,
  size: 'md',
  style: {}
};
var _default = Spinner;
exports.default = _default;