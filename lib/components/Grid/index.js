"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _GridItem = _interopRequireDefault(require("../GridItem"));

var _styles = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var sizes = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'];

var initializeStartColumns = function initializeStartColumns(s) {
  return s.reduce(function (a, c) {
    a[c] = 1;
    return a;
  }, {});
};

var isGridItem = function isGridItem(_ref) {
  var type = _ref.type;

  try {
    if (type !== _GridItem.default) {
      throw new TypeError("If you want to use a Grid component you must provide GridItem components as children. Instead received ".concat(type, "."));
    }

    return true;
  } catch (e) {
    console.error(e);
    return false;
  }
};

var getSizeFromColumns = function getSizeFromColumns(columns) {
  return Number(columns.split('/')[1]) - Number(columns.split('/')[0]);
};

var validateSize = function validateSize(size) {
  try {
    if (typeof size !== 'number') {
      throw new TypeError("Size prop must be a number. Instead received ".concat(_typeof(size), "."));
    } else if (size > 12) {
      throw new RangeError("Size prop must be a number less or equal 12. Instead received ".concat(size, "."));
    } else if (size < 1) {
      throw new RangeError("Size prop must be a number bigger than 0. Instead received ".concat(size, "."));
    }

    return size;
  } catch (e) {
    return console.error(e);
  }
};

var Grid =
/*#__PURE__*/
function (_Component) {
  _inherits(Grid, _Component);

  function Grid(props) {
    var _this;

    _classCallCheck(this, Grid);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Grid).call(this, props));

    _initialiseProps.call(_assertThisInitialized(_assertThisInitialized(_this)));

    _this.initializeGrid(_this.props);

    _this.initialized = false;
    return _this;
  }

  _createClass(Grid, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(np) {
      if (np.dynamic) {
        this.initializeGrid(np);
      }
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(np) {
      return np.dynamic;
    }
  }, {
    key: "render",
    value: function render() {
      var initialized = this.initialized,
          _this$props = this.props,
          className = _this$props.className,
          fluid = _this$props.fluid,
          children = _this$props.children,
          style = _this$props.style;

      if (!initialized) {
        this.constantProps = this.props;
        this.initialized = true;
      }

      return _jsx(_styles.default, {
        className: className,
        fluid: fluid,
        style: style
      }, void 0, children);
    }
  }]);

  return Grid;
}(_react.Component);

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.initializeGrid = function (props) {
    _this2.startColumns = initializeStartColumns(sizes);
    props.children.map(function (child) {
      return isGridItem(child) && _this2.modifyProps(child);
    });
  };

  this.modifyProps = function (child) {
    var lastSize = 1;
    var lastOffset = 0;
    sizes.map(function (size) {
      var childSize = child.props[size];
      var columns = String(childSize).includes('/') ? getSizeFromColumns(childSize) : validateSize(childSize);
      lastSize = columns || lastSize;
      lastOffset = child.props["".concat(size, "-offset")] || lastOffset;
      var sum = _this2.startColumns[size] + lastOffset + lastSize;

      var _ref2 = sum > 13 ? [1 + lastOffset, 1 + lastSize + lastOffset] : [_this2.startColumns[size] + lastOffset, sum],
          _ref3 = _slicedToArray(_ref2, 2),
          start = _ref3[0],
          end = _ref3[1];

      child.props[size] = "".concat(start, "/").concat(end);
      _this2.startColumns[size] = end;
    });
  };
};

Grid.propTypes = {
  children: _propTypes.default.node.isRequired,
  className: _propTypes.default.string,
  dynamic: _propTypes.default.bool,
  fluid: _propTypes.default.bool,
  style: _propTypes.default.object
};
Grid.defaultProps = {
  className: '',
  dynamic: false,
  fluid: false,
  style: {}
};
var _default = Grid;
exports.default = _default;