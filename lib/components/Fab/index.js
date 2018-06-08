"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactSvg = _interopRequireDefault(require("react-svg"));

var _reactClickOutside = _interopRequireDefault(require("react-click-outside"));

var _styles = require("./styles");

var _class;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var REACT_ELEMENT_TYPE;

function _jsx(type, props, key, children) { if (!REACT_ELEMENT_TYPE) { REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; } var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = { children: void 0 }; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = new Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }

var getTooltipPosition = function getTooltipPosition(position) {
  return position.includes('right') ? 'left' : position.includes('left') ? 'right' : position.includes('top') ? 'bottom' : 'top';
};

var calculateDistance = function calculateDistance(elem, mouseX, mouseY) {
  var _elem$getBoundingClie = elem.getBoundingClientRect(),
      left = _elem$getBoundingClie.left,
      top = _elem$getBoundingClie.top;

  var x = mouseX - (left + document.body.scrollLeft + elem.offsetWidth / 2);
  var y = mouseY - (top + document.body.scrollTop + elem.offsetHeight / 2);
  return {
    x: Math.abs(x),
    y: Math.abs(y)
  };
};

var renderSmallFab = function renderSmallFab(_ref, i, position, isOpen) {
  var title = _ref.title,
      icon = _ref.icon,
      onClick = _ref.onClick;
  return _jsx(_styles.Wrapper, {
    pos: isOpen && i + 1,
    onClick: onClick,
    position: position
  }, void 0, _jsx(_styles.SmallFab, {
    title: title,
    size: "small",
    position: getTooltipPosition(position)
  }, void 0, _jsx(_reactSvg.default, {
    path: icon
  })));
};

var Fab = (0, _reactClickOutside.default)(_class =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Fab, _PureComponent);

  function Fab() {
    var _getPrototypeOf2;

    var _temp, _this;

    _classCallCheck(this, Fab);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Fab)).call.apply(_getPrototypeOf2, [this].concat(args))), _this.state = {
      open: false
    }, _this.onMouseMove = function (_ref2) {
      var pageX = _ref2.pageX,
          pageY = _ref2.pageY;

      var _calculateDistance = calculateDistance(_this.fab, pageX, pageY),
          x = _calculateDistance.x,
          y = _calculateDistance.y;

      var position = _this.props.position;

      if (position === 'right center' || position === 'left center') {
        if (x > _this.props.items.length * 64 + 91 || y > 96) {
          _this.setState({
            open: false
          });
        }
      } else if (x > 96 || y > _this.props.items.length * 64 + 91) {
        _this.setState({
          open: false
        });
      }
    }, _this.handleClick = function () {
      var _assertThisInitialize = _assertThisInitialized(_assertThisInitialized(_this)),
          _assertThisInitialize2 = _assertThisInitialize.props,
          items = _assertThisInitialize2.items,
          onClick = _assertThisInitialize2.onClick,
          open = _assertThisInitialize.state.open;

      if (items.length === 0) {
        onClick();
      } else {
        _this.setState({
          open: !open
        });
      }
    }, _temp));
  }

  _createClass(Fab, [{
    key: "componentWillUpdate",
    value: function componentWillUpdate(nextProps, nextState) {
      if (this.state.open && !nextState.open) {
        document.removeEventListener('mousemove', this.onMouseMove);
      } else if (!this.state.open && nextState.open) {
        document.addEventListener('mousemove', this.onMouseMove);
      }
    }
  }, {
    key: "handleClickOutside",
    value: function handleClickOutside() {
      this.setState({
        open: false
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          className = _this$props.className,
          icon = _this$props.icon,
          title = _this$props.title,
          items = _this$props.items,
          count = _this$props.count,
          iconOpen = _this$props.iconOpen,
          position = _this$props.position,
          offset = _this$props.offset,
          open = this.state.open;
      return _jsx(_styles.Container, {
        className: className,
        onClick: this.handleClick,
        open: open,
        innerRef: function innerRef(x) {
          _this2.fab = x;
        },
        position: position,
        offset: offset
      }, void 0, _jsx(_styles.Badge, {
        count: count
      }, void 0, _jsx(_styles.BigFab, {
        disabled: open,
        title: title,
        position: getTooltipPosition(position),
        touchHold: true
      }, void 0, _jsx(_reactSvg.default, {
        path: icon
      }), _jsx(_reactSvg.default, {
        path: iconOpen || icon
      }))), items.map(function (p, i) {
        return renderSmallFab(p, i, position, open);
      }));
    }
  }]);

  return Fab;
}(_react.PureComponent)) || _class;

Fab.propTypes = {
  className: _propTypes.default.string,
  count: _propTypes.default.number,
  icon: _propTypes.default.string.isRequired,
  iconOpen: _propTypes.default.string,
  items: _propTypes.default.arrayOf(_propTypes.default.shape({
    icon: _propTypes.default.string.isRequired,
    onClick: _propTypes.default.func,
    title: _propTypes.default.string
  })),
  offset: _propTypes.default.arrayOf(_propTypes.default.number),
  onClick: _propTypes.default.func,
  position: _propTypes.default.oneOf(['left top', 'left center', 'left bottom', 'center top', 'center bottom', 'right top', 'right center', 'right bottom']),
  title: _propTypes.default.string
};
Fab.defaultProps = {
  className: '',
  count: null,
  iconOpen: '',
  items: [],
  offset: [0, 0],
  onClick: function onClick() {},
  position: 'right bottom',
  title: ''
};
var _default = Fab;
exports.default = _default;