"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _index = _interopRequireDefault(require("./index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var REACT_ELEMENT_TYPE;

function _jsx(type, props, key, children) { if (!REACT_ELEMENT_TYPE) { REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; } var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = { children: void 0 }; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = new Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }

var _ref =
/*#__PURE__*/
_jsx(_index.default, {});

var _ref2 =
/*#__PURE__*/
_jsx(_index.default, {
  label: "abc"
});

var _ref3 =
/*#__PURE__*/
_jsx(_index.default, {}, void 0, "abc");

describe('Button', function () {
  it('Render Button component', function () {
    expect((0, _enzyme.mount)(_ref).find('Button').exists()).toBe(true);
  });
  it('Render text provided by label prop', function () {
    expect((0, _enzyme.mount)(_ref2).find('button').text()).toEqual('abc');
  });
  it('Render text provided as children', function () {
    expect((0, _enzyme.mount)(_ref3).find('button').text()).toEqual('abc');
  });
});