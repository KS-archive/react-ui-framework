"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _utils = require("../../utils");

var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["grid-column: ", ";"]);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var _default = _styledComponents.default.div.withConfig({
  displayName: "GridItem"
})(["grid-column:", ";", " ", " ", " ", " ", ""], function (props) {
  return props.xxl;
}, _utils.media.xl(_templateObject, function (props) {
  return props.xl;
}), _utils.media.lg(_templateObject, function (props) {
  return props.lg;
}), _utils.media.md(_templateObject, function (props) {
  return props.md;
}), _utils.media.sm(_templateObject, function (props) {
  return props.sm;
}), _utils.media.xs(_templateObject, function (props) {
  return props.xs;
}));

exports.default = _default;