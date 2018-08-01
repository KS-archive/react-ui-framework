"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactRouterDom = require("react-router-dom");

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
_jsx("i", {
  className: "fas fa-bars"
});

var _ref2 =
/*#__PURE__*/
_jsx("i", {
  className: "fas fa-arrow-left"
});

var Sidebar =
/*#__PURE__*/
function (_Component) {
  _inherits(Sidebar, _Component);

  // const { links } = this.props
  function Sidebar(props) {
    var _this;

    _classCallCheck(this, Sidebar);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Sidebar).call(this, props));

    _this.show = function () {
      var _this$state = _this.state,
          sidebar = _this$state.sidebar,
          labels = _this$state.labels,
          hamburger = _this$state.hamburger,
          hidingArrow = _this$state.hidingArrow,
          items = _this$state.items;
      sidebar.style.width = 200 + 'px';
      hamburger.style.display = 'none';
      hidingArrow.style.display = 'block';

      for (var i = 0; i < labels.length; i++) {
        labels[i].style.display = 'inline';
        items[i].style.width = 200 + 'px';
      }
    };

    _this.hide = function () {
      var _this$state2 = _this.state,
          sidebar = _this$state2.sidebar,
          labels = _this$state2.labels,
          hamburger = _this$state2.hamburger,
          hidingArrow = _this$state2.hidingArrow,
          items = _this$state2.items;
      sidebar.style.width = 48 + 'px';
      hamburger.style.display = 'block';
      hidingArrow.style.display = 'none';

      for (var i = 0; i < labels.length; i++) {
        labels[i].style.display = 'none';
        items[i].style.width = 48 + 'px';
      }
    };

    _this.state = {
      links: [{
        icon: "far fa-calendar-alt",
        label: "calendar",
        href: "/calendar"
      }, {
        icon: "far fa-envelope-open",
        label: "mail",
        href: "/mail"
      }],
      sidebar: "",
      labels: "",
      hamburger: "",
      hidingArrow: "",
      items: ""
    };
    return _this;
  }

  _createClass(Sidebar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        sidebar: document.getElementById("sidebar")
      });
      this.setState({
        labels: document.getElementsByClassName("label")
      });
      this.setState({
        hamburger: document.getElementById("hamburger")
      });
      this.setState({
        hidingArrow: document.getElementById("hidingArrow")
      });
      this.setState({
        items: document.getElementsByClassName("item")
      });
    } //instead of these two functions use two styled components - look at stack overflow from zakladki

  }, {
    key: "render",
    value: function render() {
      return _jsx(_styles.Container, {
        id: "sidebar"
      }, void 0, console.log("el", this.state.sidebar), _jsx(_styles.Hamburger, {
        id: "hamburger",
        onClick: this.show
      }, void 0, _ref), _jsx(_styles.HidingArrow, {
        id: "hidingArrow",
        onClick: this.hide
      }, void 0, _ref2), _jsx(_reactRouterDom.BrowserRouter, {}, void 0, _jsx(_styles.Links, {}, void 0, this.state.links.map(function (link) {
        return _jsx(_styles.Item, {
          to: link.href,
          className: "item"
        }, void 0, _jsx(_styles.Icon, {
          className: link.icon
        }), _jsx(_styles.Label, {
          className: "label"
        }, void 0, link.label));
      }))));
    }
  }]);

  return Sidebar;
}(_react.Component);

Sidebar.propTypes = {// type: PropTypes.oneOf(['button', 'submit', 'reset']),
};
Sidebar.defaultProps = {// type: 'button',
};
var _default = Sidebar;
exports.default = _default;