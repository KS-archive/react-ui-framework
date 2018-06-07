"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactCustomScrollbars = require("react-custom-scrollbars");

var _styles = require("./styles");

var _Simple = _interopRequireDefault(require("./Simple"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var REACT_ELEMENT_TYPE;

function _jsx(type, props, key, children) { if (!REACT_ELEMENT_TYPE) { REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; } var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = { children: void 0 }; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = new Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var Modal =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Modal, _PureComponent);

  function Modal() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, Modal);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = Modal.__proto__ || Object.getPrototypeOf(Modal)).call.apply(_ref, [this].concat(args))), _this.state = {
      isShow: false,
      animationType: 'leave'
    }, _this.onKeyUp = function (_ref2) {
      var keyCode = _ref2.keyCode;
      return keyCode === 27 && _this.props.onClose();
    }, _this.enter = function () {
      return _this.setState({
        isShow: true,
        animationType: 'enter'
      });
    }, _this.leave = function () {
      return _this.setState({
        animationType: 'leave'
      });
    }, _this.animationEnd = function (_ref3) {
      var target = _ref3.target;

      var _assertThisInitialize = _assertThisInitialized(_this),
          animationType = _assertThisInitialize.state.animationType,
          onAnimationEnd = _assertThisInitialize.props.onAnimationEnd,
          container = _assertThisInitialize.container;

      if (animationType === 'leave') {
        _this.setState({
          isShow: false
        });
      } else {
        container.focus();
      }

      if (target === container && onAnimationEnd) {
        onAnimationEnd();
      }
    }, _temp));
  }

  _createClass(Modal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.visible) {
        this.enter();
      }
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(_ref4) {
      var visible = _ref4.visible;
      var _ref5 = [visible, this.props.visible],
          isVisible = _ref5[0],
          wasVisible = _ref5[1];
      if (!wasVisible && isVisible) this.enter();
      if (wasVisible && !isVisible) this.leave();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(_ref6) {
      var visible = _ref6.visible;

      if (!visible && this.props.visible) {
        this.scrollbars.scrollToTop();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          animation = _props.animation,
          buttons = _props.buttons,
          children = _props.children,
          color = _props.color,
          duration = _props.duration,
          enterAnimation = _props.enterAnimation,
          icon = _props.icon,
          leaveAnimation = _props.leaveAnimation,
          onClose = _props.onClose,
          showCloseButton = _props.showCloseButton,
          title = _props.title,
          width = _props.width,
          _state = this.state,
          animationType = _state.animationType,
          isShow = _state.isShow;
      var animationName = (animationType === 'enter' ? enterAnimation : leaveAnimation) || animation;
      return _jsx(_styles.Container, {
        isShow: isShow,
        duration: duration,
        animationType: animationType,
        onAnimationEnd: this.animationEnd,
        tabIndex: "-1",
        innerRef: function innerRef(container) {
          _this2.container = container;
        },
        onKeyUp: this.onKeyUp
      }, void 0, _jsx(_styles.Mask, {
        onClick: onClose
      }, "mask"), _react.default.createElement(_reactCustomScrollbars.Scrollbars, {
        key: "scrollbars",
        ref: function ref(scrollbars) {
          _this2.scrollbars = scrollbars;
        }
      }, _jsx(_Simple.default, {
        width: width,
        duration: duration,
        animationName: animationName,
        animationType: animationType,
        color: color,
        showCloseButton: showCloseButton,
        onClose: onClose,
        icon: icon,
        title: title,
        buttons: buttons.reverse()
      }, void 0, children)));
    }
  }]);

  return Modal;
}(_react.PureComponent);

Modal.propTypes = {
  animation: _propTypes.default.string,
  buttons: _propTypes.default.array,
  children: _propTypes.default.node.isRequired,
  color: _propTypes.default.string,
  duration: _propTypes.default.number,
  enterAnimation: _propTypes.default.string,
  icon: _propTypes.default.string,
  leaveAnimation: _propTypes.default.string,
  onAnimationEnd: _propTypes.default.func,
  onClose: _propTypes.default.func.isRequired,
  showCloseButton: _propTypes.default.bool,
  title: _propTypes.default.string.isRequired,
  visible: _propTypes.default.bool,
  width: _propTypes.default.number
};
Modal.defaultProps = {
  animation: 'fade',
  buttons: [],
  color: 'var(--primary2)',
  duration: 300,
  enterAnimation: '',
  icon: '',
  leaveAnimation: '',
  onAnimationEnd: function onAnimationEnd() {},
  showCloseButton: true,
  visible: false,
  width: 456
};
var _default = Modal;
exports.default = _default;