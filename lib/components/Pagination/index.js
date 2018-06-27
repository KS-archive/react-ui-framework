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
_jsx("i", {
  "class": "fas fa-arrow-left"
});

var _ref2 =
/*#__PURE__*/
_jsx("i", {
  "class": "fas fa-arrow-right"
});

// import {Page} from '../Page/index';
var Pagination =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Pagination, _PureComponent);

  function Pagination(props) {
    var _this;

    _classCallCheck(this, Pagination);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Pagination).call(this, props));
    _this.state = {
      currentPage: 1
    };
    _this.createArray = _this.createArray.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.nextPage = _this.nextPage.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.previousPage = _this.previousPage.bind(_assertThisInitialized(_assertThisInitialized(_this))); // this.handleClick = this.handleClick.bind(this);
    // this.goToPage = this.goToPage.bind(this);

    return _this;
  }

  _createClass(Pagination, [{
    key: "createArray",
    value: function createArray(currentPage) {
      var index = 1,
          array = [];

      while (index <= this.props.pageCount) {
        if (index == currentPage) {
          array.push(_jsx(_styles.PageActive, {
            id: index,
            href: index,
            target: "_blank"
          }, void 0, index));
        } else {
          array.push(_jsx(_styles.PageDisabled, {
            id: index,
            href: index,
            target: "_blank"
          }, void 0, index));
        }

        index++;
      }

      return array;
    }
  }, {
    key: "nextPage",
    value: function nextPage() {
      if (this.state.currentPage < this.props.pageCount) {
        this.setState({
          currentPage: this.state.currentPage + 1
        });
      }

      this.createArray(this.state.currentPage);
    }
  }, {
    key: "previousPage",
    value: function previousPage() {
      if (this.state.currentPage > 1) {
        this.setState({
          currentPage: this.state.currentPage - 1
        });
      }

      this.createArray(this.state.currentPage);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.createArray(this.state.currentPage);
    } // shouldComponentUpdate(nextProps, nextState){
    //     let shouldUpdate = this.state.status !== nextState.status;
    //     return shouldUpdate;
    // }
    // componentWillUpdate(prevState){
    //     if(prevState.data != this.state.data){
    //         this.createArray();
    //         console.log('I did updated!');
    //     }
    // }

  }, {
    key: "render",
    value: function render() {
      return _jsx(_styles.Container, {
        pageCount: this.props.pageCount
      }, void 0, _jsx(_styles.Label, {
        previousLabel: this.props.previousLabelClass,
        onClick: this.previousPage
      }, void 0, _ref), this.createArray(this.state.currentPage), _jsx(_styles.Label, {
        nextLabelClass: this.props.nextLabelClass,
        onClick: this.nextPage
      }, void 0, _ref2, " "));
    }
  }]);

  return Pagination;
}(_react.PureComponent);

;
Pagination.propTypes = {
  pageCount: _propTypes.default.number.isRequired,
  previousLabelClass: _propTypes.default.string,
  nextLabelClass: _propTypes.default.string
};
Pagination.defaultProps = {
  pageCount: 1
};
var _default = Pagination; // array = { this.createArray(this.props.pageCount) }

exports.default = _default;
{
  /* <Page id={index} href={index} target="_blank">{index}</Page>
  <PageActive id={index} href={index} target="_blank">{index}</PageActive> */
}