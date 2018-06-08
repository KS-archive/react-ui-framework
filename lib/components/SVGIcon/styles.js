"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactSvg = _interopRequireDefault(require("react-svg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (0, _styledComponents.default)(_reactSvg.default).withConfig({
  displayName: "styles"
})(["box-sizing:border-box;display:flex;align-items:center;justify-content:center;div{display:flex;align-items:center;justify-content:center;}svg{width:", ";height:", ";transition:all 0.3s var(--ease-in-out);}svg,path,circle,use{fill:", ";}"], function (_ref) {
  var width = _ref.width;
  return typeof width === 'number' ? "".concat(width, "px") : width;
}, function (_ref2) {
  var height = _ref2.height;
  return typeof height === 'number' ? "".concat(height, "px") : height;
}, function (props) {
  return props.fill;
});

exports.default = _default;