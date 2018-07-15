"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _styledComponents.default.div.withConfig({
  displayName: "Container"
})(["box-sizing:border-box;display:flex;flex-wrap:wrap;margin:0 auto;width:", ";"], function (props) {
  return props.fluid ? '100%;' : 'var(--container-width)';
});

exports.default = _default;