"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactWebfontLoader = _interopRequireDefault(require("@dr-kobros/react-webfont-loader"));

var _reactCustomScrollbars = require("react-custom-scrollbars");

var _reapop = _interopRequireDefault(require("reapop"));

require("react-tippy/dist/tippy.css");

require("react-select/dist/react-select.css");

require("../../styles.css");

var _getFontAwesome = _interopRequireDefault(require("./getFontAwesome"));

var _theme = _interopRequireDefault(require("../../services/notifications/theme"));

var _styles2 = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var REACT_ELEMENT_TYPE;

function _jsx(type, props, key, children) { if (!REACT_ELEMENT_TYPE) { REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; } var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = { children: void 0 }; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = new Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }

var isFontAwesomeLoaded = false;
var config = {
  google: {
    families: ['Montserrat:400,500,700:latin,latin-ext', 'Raleway:400,500,700:latin,latin-ext']
  }
};

var _ref2 =
/*#__PURE__*/
_jsx(_reapop.default, {
  theme: _theme.default
});

var Index = function Index(_ref) {
  var after = _ref.after,
      before = _ref.before,
      bodyClassName = _ref.bodyClassName,
      children = _ref.children,
      className = _ref.className,
      fa = _ref.fa,
      notifications = _ref.notifications;

  if (!isFontAwesomeLoaded) {
    isFontAwesomeLoaded = (0, _getFontAwesome.default)(fa, isFontAwesomeLoaded);
  }

  return _jsx(_reactWebfontLoader.default, {
    config: config
  }, void 0, _jsx(_styles2.Container, {
    className: className
  }, void 0, before, _jsx(_styles2.Body, {
    className: bodyClassName
  }, void 0, _jsx(_reactCustomScrollbars.Scrollbars, {}, void 0, children)), after, notifications && _ref2));
};

Index.propTypes = {
  after: _propTypes.default.node,
  before: _propTypes.default.node,
  bodyClassName: _propTypes.default.string,
  children: _propTypes.default.node.isRequired,
  className: _propTypes.default.node,
  fa: _propTypes.default.string,
  notifications: _propTypes.default.bool
};
Index.defaultProps = {
  after: null,
  before: null,
  bodyClassName: '',
  className: '',
  fa: 'free',
  notifications: false
};
var _default = Index;
exports.default = _default;