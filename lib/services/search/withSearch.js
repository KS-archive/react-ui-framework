"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactRedux = require("react-redux");

var _withRouter = _interopRequireDefault(require("react-router/withRouter"));

var _queryString = _interopRequireDefault(require("query-string"));

var _ramda = require("ramda");

var _actions = require("./actions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _default = function _default(WrappedComponent) {
  var _dec, _class;

  var WithSearch = (_dec = (0, _reactRedux.connect)(function (_ref) {
    var search = _ref.search;
    return {
      search: search
    };
  }, {
    setSearch: _actions.setSearch
  }), (0, _withRouter.default)(_class = _dec(_class =
  /*#__PURE__*/
  function (_PureComponent) {
    _inherits(WithSearch, _PureComponent);

    function WithSearch() {
      var _ref2;

      var _temp, _this;

      _classCallCheck(this, WithSearch);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref2 = WithSearch.__proto__ || Object.getPrototypeOf(WithSearch)).call.apply(_ref2, [this].concat(args))), _this.setSearch = function (queryObj) {
        _this.props.setSearch(queryObj, _this.props.history);
      }, _temp));
    }

    _createClass(WithSearch, [{
      key: "componentWillMount",
      value: function componentWillMount() {
        if (this.props.location.search) {
          this.setSearch(_queryString.default.parse(this.props.location.search));
        }
      }
    }, {
      key: "componentWillReceiveProps",
      value: function componentWillReceiveProps(np) {
        if (np.location.search !== this.props.location.search) {
          this.setSearch(_queryString.default.parse(np.location.search));
        }

        if (np.search !== this.props.search) {
          var urlNewParams = np.search.query ? np.search : (0, _ramda.omit)(['query'], np.search);
          np.history.push({
            pathname: np.history.location.pathname,
            search: _queryString.default.stringify(urlNewParams)
          });
        }
      }
    }, {
      key: "render",
      value: function render() {
        return _react.default.createElement(WrappedComponent, _extends({}, this.props, {
          setSearch: this.setSearch
        }));
      }
    }]);

    return WithSearch;
  }(_react.PureComponent)) || _class) || _class);
  return WithSearch;
};

exports.default = _default;