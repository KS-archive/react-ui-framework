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

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var _ref =
/*#__PURE__*/
_jsx("div", {
  className: "border"
}, void 0, _jsx("div", {}));

var Select =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Select, _PureComponent);

  function Select(props) {
    var _this;

    _classCallCheck(this, Select);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Select).call(this, props));

    _initialiseProps.call(_assertThisInitialized(_assertThisInitialized(_this)));

    var _this$props = _this.props,
        value = _this$props.value,
        pristine = _this$props.pristine;
    _this.state = {
      value: value,
      focused: false,
      filled: value && value.length > 0,
      pristine: pristine
    };
    return _this;
  }

  _createClass(Select, [{
    key: "render",
    value: function render() {
      var handleBlur = this.handleBlur,
          handleChange = this.handleChange,
          handleFocus = this.handleFocus,
          _this$state = this.state,
          filled = _this$state.filled,
          focused = _this$state.focused,
          pristine = _this$state.pristine,
          value = _this$state.value,
          _this$props2 = this.props,
          className = _this$props2.className,
          isClearable = _this$props2.isClearable,
          error = _this$props2.error,
          label = _this$props2.label,
          name = _this$props2.name,
          items = _this$props2.items,
          isSearchable = _this$props2.isSearchable,
          style = _this$props2.style;
      var selectValue = filled && items.filter(function (item) {
        return item.value === value;
      })[0];
      return _jsx(_styles.InputWrapper, {
        className: className,
        error: error,
        filled: filled,
        focused: focused,
        pristine: pristine,
        style: style
      }, void 0, _ref, _jsx("label", {
        htmlFor: label
      }, void 0, label), _jsx(_styles.StyledSelect, {
        classNamePrefix: "ruf",
        isClearable: isClearable,
        name: name,
        onBlur: handleBlur,
        onChange: handleChange,
        onFocus: handleFocus,
        options: items,
        placeholder: "",
        isSearchable: isSearchable,
        value: selectValue
      }), _jsx("div", {
        className: "error"
      }, void 0, error));
    }
  }]);

  return Select;
}(_react.PureComponent);

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.handleFocus = function () {
    _this2.setState({
      focused: true
    });

    _this2.props.onFocus();
  };

  this.handleBlur = function () {
    _this2.setState({
      focused: false,
      pristine: false
    });

    _this2.props.onBlur();
  };

  this.handleChange = function (option) {
    var value = option ? option.value : null;

    _this2.setState({
      value: value,
      filled: value && value.length > 0
    });

    _this2.props.onChange(value);
  };
};

Select.propTypes = {
  className: _propTypes.default.string,
  isClearable: _propTypes.default.bool,
  error: _propTypes.default.string,
  label: _propTypes.default.string.isRequired,
  name: _propTypes.default.string.isRequired,
  onFocus: _propTypes.default.func,
  onBlur: _propTypes.default.func,
  onChange: _propTypes.default.func,
  items: _propTypes.default.arrayOf(_propTypes.default.shape({
    label: _propTypes.default.string.isRequired,
    value: _propTypes.default.string.isRequired
  })),
  pristine: _propTypes.default.bool,
  isSearchable: _propTypes.default.bool,
  style: _propTypes.default.object,
  value: _propTypes.default.string
};
Select.defaultProps = {
  className: '',
  isClearable: true,
  error: '',
  onFocus: function onFocus() {},
  onBlur: function onBlur() {},
  onChange: function onChange() {},
  items: [],
  pristine: true,
  isSearchable: false,
  style: {},
  value: ''
};
var _default = Select;
exports.default = _default;