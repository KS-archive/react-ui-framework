"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("./styles");

var _this = void 0;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var REACT_ELEMENT_TYPE;

function _jsx(type, props, key, children) { if (!REACT_ELEMENT_TYPE) { REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; } var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = { children: void 0 }; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = new Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }

var Page = function Page(_ref) {
  var array = _ref.array,
      currentPage = _ref.currentPage,
      pageCount = _ref.pageCount;
  var index = 1;

  while (index <= pageCount) {
    if (array[index] == currentPage) {
      return _jsx(_styles.PageActive, {
        id: index,
        href: index,
        target: "_blank"
      }, void 0, _this.state.array[index]);
    } else {
      return _jsx(_styles.PageDisabled, {
        id: index,
        href: index,
        target: "_blank"
      }, void 0, _this.state.array[index]);
    }

    index++;
  }
};

var _default = Page;
exports.default = _default;