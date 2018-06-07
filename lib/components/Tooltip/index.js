"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactTippy = require("react-tippy");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var REACT_ELEMENT_TYPE;

function _jsx(type, props, key, children) { if (!REACT_ELEMENT_TYPE) { REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; } var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = { children: void 0 }; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = new Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var sizes = {
  lg: 'big',
  md: 'regular',
  sm: 'small'
};

var Tooltip =
/*#__PURE__*/
function (_Component) {
  _inherits(Tooltip, _Component);

  function Tooltip() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, Tooltip);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = Tooltip.__proto__ || Object.getPrototypeOf(Tooltip)).call.apply(_ref, [this].concat(args))), _this.state = {
      updated: false
    }, _temp));
  }

  _createClass(Tooltip, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(np) {
      var _this2 = this;

      if (np !== this.props) {
        this.setState({
          updated: true
        }, function () {
          window.setTimeout(function () {
            _this2.setState({
              updated: false
            });
          }, 1);
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return _jsx("span", {
        style: {
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center'
        }
      }, void 0, !this.state.updated ? _jsx(_reactTippy.Tooltip, {
        animation: this.props.animation,
        arrow: this.props.arrow,
        arrowSize: sizes[this.props.arrowSize],
        className: this.props.className,
        delay: this.props.delay,
        disabled: this.props.disabled,
        distance: this.props.distance,
        duration: this.props.duration,
        hideDelay: this.props.hideDelay,
        hideOnClick: this.props.hideOnClick,
        html: this.props.html,
        interactive: this.props.interactive,
        offset: this.props.offset,
        open: this.props.open,
        position: this.props.position,
        size: sizes[this.props.size],
        style: this.props.style,
        theme: this.props.theme,
        title: this.props.title,
        touchHold: this.props.touchHold,
        trigger: this.props.trigger
      }, void 0, this.props.children) : this.props.children);
    }
  }]);

  return Tooltip;
}(_react.Component);

;
Tooltip.propTypes = {
  animation: _propTypes.default.oneOf(['shift', 'perspective', 'fade', 'scale', 'none']),
  arrow: _propTypes.default.bool,
  arrowSize: _propTypes.default.oneOf(['sm', 'md', 'lg']),
  children: _propTypes.default.node.isRequired,
  className: _propTypes.default.string,
  delay: _propTypes.default.number,
  disabled: _propTypes.default.bool,
  distance: _propTypes.default.number,
  duration: _propTypes.default.number,
  hideDelay: _propTypes.default.number,
  hideOnClick: _propTypes.default.bool,
  html: _propTypes.default.node,
  interactive: _propTypes.default.bool,
  offset: _propTypes.default.number,
  open: _propTypes.default.bool,
  position: _propTypes.default.oneOf(['top', 'bottom', 'left', 'right']),
  size: _propTypes.default.oneOf(['sm', 'md', 'lg']),
  style: _propTypes.default.object,
  theme: _propTypes.default.oneOf(['dark', 'light', 'transparent']),
  title: _propTypes.default.string.isRequired,
  touchHold: _propTypes.default.bool,
  trigger: _propTypes.default.string
};
Tooltip.defaultProps = {
  animation: 'shift',
  arrow: false,
  arrowSize: 'md',
  className: '',
  delay: 0,
  disabled: false,
  distance: 8,
  duration: 300,
  hideDelay: 0,
  hideOnClick: true,
  html: null,
  interactive: false,
  offset: 0,
  open: undefined,
  position: 'top',
  size: 'md',
  style: {},
  theme: 'dark',
  touchHold: false,
  trigger: 'mouseenter focus'
};
var _default = Tooltip;
exports.default = _default;