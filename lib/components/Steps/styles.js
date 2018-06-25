"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Rectangle = exports.Circle = exports.Wrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Wrapper = _styledComponents.default.div.withConfig({
  displayName: "styles__Wrapper"
})(["margin:0;padding:0;display:flex;align-items:center;"]);

exports.Wrapper = Wrapper;

var Circle = _styledComponents.default.div.withConfig({
  displayName: "styles__Circle"
})(["width:44px;height:44px;border:2px solid #2F80ED;border-radius:50%;display:flex;justify-content:center;align-items:center;font-size:16px;color:#2F80ED;font-family:Roboto;"]);

exports.Circle = Circle;

var Rectangle = _styledComponents.default.div.withConfig({
  displayName: "styles__Rectangle"
})(["width:84px;height:2px;background-color:#2F80ED;"]);

exports.Rectangle = Rectangle;