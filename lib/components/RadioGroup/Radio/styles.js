"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Check = exports.Label = exports.Input = exports.Container = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Container = _styledComponents.default.li.withConfig({
  displayName: "styles__Container"
})(["cursor:pointer;display:flex;align-items:center;&:hover{> div::before{opacity:0.25;}}"]);

exports.Container = Container;

var Input = _styledComponents.default.input.withConfig({
  displayName: "styles__Input"
})(["position:absolute;visibility:hidden;&:checked ~ div{border:1px solid var(--primary2);&::before{opacity:1;}}"]);

exports.Input = Input;

var Label = _styledComponents.default.label.withConfig({
  displayName: "styles__Label"
})(["top:1px;margin-left:var(--space-sm);font-family:var(--mainFont);font-weight:var(--regular);font-size:var(--font-md);line-height:var(--font-md-lh);color:var(--text2);transition:all 0.3s linear;"]);

exports.Label = Label;

var Check = _styledComponents.default.div.withConfig({
  displayName: "styles__Check"
})(["position:relative;border:", ";background-color:#fff;border-radius:100%;height:20px;width:20px;transition:all 0.3s linear;&::before{content:'';display:block;position:absolute;opacity:0;background-color:", ";border-radius:100%;height:12px;width:12px;top:3px;left:3px;transition:all 0.3s linear;}"], function (_ref) {
  var error = _ref.error;
  return error ? '1px solid var(--error)' : '1px solid var(--grey3)';
}, function (_ref2) {
  var error = _ref2.error;
  return error ? 'var(--error)' : 'var(--primary2)';
});

exports.Check = Check;