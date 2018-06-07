"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Checkmark = exports.Input = exports.Label = exports.Container = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Container = _styledComponents.default.div.withConfig({
  displayName: "styles__Container"
})(["cursor:pointer;user-select:none;display:block;position:relative;margin:2px;padding-left:28px;border-radius:4px;&:hover span::after{opacity:0.25;}.error{position:absolute;visibility:", ";top:", ";opacity:", ";left:0;padding-top:2px;font-size:var(--font-xs);color:var(--error);font-weight:var(--regular);transition:all 0.3s var(--ease-in-out);}", ""], function (_ref) {
  var error = _ref.error;
  return error && typeof error === 'string' ? 'visible' : 'hidden';
}, function (_ref2) {
  var error = _ref2.error;
  return error && typeof error === 'string' ? '20px' : 0;
}, function (_ref3) {
  var error = _ref3.error;
  return error && typeof error === 'string' ? 1 : 0;
}, function (props) {
  return props.error && "\n    span {\n      border: 1px solid var(--error) !important;\n\n      &::after {\n        color: var(--error);\n      }\n    }\n  ";
});

exports.Container = Container;

var Label = _styledComponents.default.label.withConfig({
  displayName: "styles__Label"
})(["cursor:pointer;position:relative;top:1px;font-family:var(--mainFont);font-size:var(--font-md);font-weight:var(--regular);color:var(--text2);"]);

exports.Label = Label;

var Input = _styledComponents.default.input.withConfig({
  displayName: "styles__Input"
})(["position:absolute;opacity:0;&:checked ~ span{border:1px solid var(--primary2);}&:checked ~ span::after{opacity:1;}"]);

exports.Input = Input;

var Checkmark = _styledComponents.default.span.withConfig({
  displayName: "styles__Checkmark"
})(["position:absolute;top:0;left:0;height:20px;width:20px;background-color:#fff;border:1px solid var(--grey2);border-radius:4px;transition:all 0.3s var(--ease-in-out);&::after{content:\"\f00d\";position:absolute;opacity:0;display:flex;align-items:center;justify-content:center;left:0;top:0;bottom:0;right:0;font-size:var(--font-lg);font-weight:var(--fa-light);color:var(--primary2);transition:all 0.3s var(--ease-in-out);}"]);

exports.Checkmark = Checkmark;