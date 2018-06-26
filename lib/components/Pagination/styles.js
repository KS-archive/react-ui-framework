"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Label = exports.PageActive = exports.Page = exports.Container = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Container = _styledComponents.default.div.withConfig({
  displayName: "styles__Container"
})(["min-width:96px;color:white;display:flex;flex-wrap:wrap;flex-direction:row;justify-content:center;"]);

exports.Container = Container;

var Page = _styledComponents.default.a.withConfig({
  displayName: "styles__Page"
})(["width:25px;height:25px;margin:2px;font-size:16px;line-height:25px;font-family:Roboto;text-align:center;color:#E0E0E0;text-decoration:none;&:hover{color:#2F80ED;border:1px solid #2F80ED;border-radius:4px;}"]);

exports.Page = Page;

var PageActive = _styledComponents.default.a.withConfig({
  displayName: "styles__PageActive"
})(["width:25px;height:25px;margin:2px;font-size:16px;line-height:25px;font-family:Roboto;text-align:center;text-decoration:none;color:#2F80ED;border:1px solid #2F80ED;border-radius:4px;"]);

exports.PageActive = PageActive;

var Label = _styledComponents.default.button.withConfig({
  displayName: "styles__Label"
})(["width:25px;height:25px;margin:2px;font-size:16px;line-height:25px;font-family:Roboto;text-align:center;color:#E0E0E0;background:none;border:none;&:active{color:#E0E0E0;}"]);

exports.Label = Label;