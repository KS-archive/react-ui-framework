"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Body = exports.Container = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Container = _styledComponents.default.div.withConfig({
  displayName: "styles__Container"
})(["position:relative;width:100vw;height:100vh;max-width:100vw;"]);

exports.Container = Container;

var Body = _styledComponents.default.div.withConfig({
  displayName: "styles__Body"
})(["position:absolute;top:0;left:0;right:0;height:100%;> div > div:nth-child(1){overflow-x:hidden !important;}> div > div:nth-child(2){display:none;}"]);

exports.Body = Body;