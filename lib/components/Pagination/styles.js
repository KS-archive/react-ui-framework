"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Label = exports.Page = exports.Container = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Container = _styledComponents.default.div.withConfig({
  displayName: "styles__Container"
})(["min-width:96px;color:white;display:flex;flex-wrap:wrap;flex-direction:row;justify-content:center;"]);

exports.Container = Container;

var Page = _styledComponents.default.a.withConfig({
  displayName: "styles__Page"
})(["width:25px;height:25px;margin:2px;font-size:16px;line-height:25px;font-family:Roboto;text-align:center;color:white;text-decoration:none;&:hover{color:pink;border:1px solid pink;border-radius:4px;}"]);

exports.Page = Page;

var Label = _styledComponents.default.button.withConfig({
  displayName: "styles__Label"
})(["width:25px;height:25px;margin:2px;font-size:16px;line-height:25px;font-family:Roboto;text-align:center;color:pink;background:none;border:none;"]);

exports.Label = Label;