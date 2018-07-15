"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Checkbox = _interopRequireDefault(require("../Checkbox"));

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var REACT_ELEMENT_TYPE;

function _jsx(type, props, key, children) { if (!REACT_ELEMENT_TYPE) { REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; } var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = { children: void 0 }; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = new Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var ChceckboxGroup =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(ChceckboxGroup, _PureComponent);

  _createClass(ChceckboxGroup, null, [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      return props.value !== state.value ? {
        value: _objectSpread({}, state.value, props.value)
      } : null;
    }
  }]);

  function ChceckboxGroup(props) {
    var _this;

    _classCallCheck(this, ChceckboxGroup);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ChceckboxGroup).call(this, props));

    _initialiseProps.call(_assertThisInitialized(_assertThisInitialized(_this)));

    var value = props.items.reduce(function (acc, item) {
      acc[item.name] = acc[item.name] || false;
      return acc;
    }, _objectSpread({}, props.value));
    _this.state = {
      value: value
    };
    return _this;
  }

  _createClass(ChceckboxGroup, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          error = _this$props.error,
          items = _this$props.items,
          label = _this$props.label,
          style = _this$props.style;
      return _jsx(_styles.Container, {
        style: style,
        className: className
      }, void 0, label && _jsx(_styles.Label, {}, void 0, label), _jsx(_styles.Items, {}, void 0, items.map(this.renderCheckbox)), _jsx(_styles.Error, {
        error: error
      }, void 0, error));
    }
  }]);

  return ChceckboxGroup;
}(_react.PureComponent);

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.onChange = function (name, value) {
    var newValue = _objectSpread({}, _this2.state.value, _defineProperty({}, name, value));

    _this2.setState({
      value: newValue
    });

    _this2.props.onChange(newValue);
  };

  this.renderCheckbox = function (item) {
    return _react.default.createElement(_Checkbox.default, _extends({}, item, {
      key: item.name,
      error: !!_this2.props.error,
      checked: _this2.state.value[item.name],
      onChange: function onChange(value) {
        return _this2.onChange(item.name, value);
      }
    }));
  };
};

ChceckboxGroup.propTypes = {
  className: _propTypes.default.string,
  error: _propTypes.default.string,
  items: _propTypes.default.arrayOf(_propTypes.default.object).isRequired,
  label: _propTypes.default.string,
  name: _propTypes.default.string.isRequired,
  onChange: _propTypes.default.func,
  style: _propTypes.default.object,
  value: _propTypes.default.object
};
ChceckboxGroup.defaultProps = {
  className: '',
  error: '',
  label: '',
  onChange: function onChange() {},
  style: {},
  value: {}
};
var _default = ChceckboxGroup;
exports.default = _default;