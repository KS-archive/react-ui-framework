"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("./styles");

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

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var _ref =
/*#__PURE__*/
_jsx(_styles.Checkmark, {
  className: "fa"
});

var Checkbox =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Checkbox, _PureComponent);

  function Checkbox() {
    var _getPrototypeOf2;

    var _temp, _this;

    _classCallCheck(this, Checkbox);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Checkbox)).call.apply(_getPrototypeOf2, [this].concat(args))), _this.state = {
      checked: _this.props.checked
    }, _this.onChange = function () {
      var checked = !_this.state.checked;

      _this.setState({
        checked: checked
      });

      _this.props.onChange(checked);
    }, _temp));
  }

  _createClass(Checkbox, [{
    key: "render",
    value: function render() {
      var onChange = this.onChange,
          checked = this.state.checked,
          _this$props = this.props,
          className = _this$props.className,
          error = _this$props.error,
          label = _this$props.label,
          name = _this$props.name,
          style = _this$props.style;
      return _jsx(_styles.Container, {
        className: className,
        error: error,
        onClick: onChange,
        style: style
      }, void 0, _jsx(_styles.Label, {}, void 0, label), _jsx(_styles.Input, {
        checked: checked,
        onChange: onChange,
        name: name,
        type: "checkbox"
      }), _ref, _jsx("div", {
        className: "error"
      }, void 0, error));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      return props.checked !== state.checked ? {
        checked: props.checked
      } : null;
    }
  }]);

  return Checkbox;
}(_react.PureComponent);

Checkbox.propTypes = {
  label: _propTypes.default.string.isRequired,
  name: _propTypes.default.string.isRequired,
  className: _propTypes.default.string,
  checked: _propTypes.default.bool,
  error: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.bool]),
  onChange: _propTypes.default.func,
  style: _propTypes.default.object
};
Checkbox.defaultProps = {
  checked: false,
  className: '',
  error: '',
  onChange: function onChange() {},
  style: {}
};
var _default = Checkbox;
exports.default = _default;