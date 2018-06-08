"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Error = exports.Items = exports.Label = exports.Container = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Container = _styledComponents.default.div.withConfig({
  displayName: "styles__Container"
})(["min-width:96px;"]);

exports.Container = Container;

var Label = _styledComponents.default.label.withConfig({
  displayName: "styles__Label"
})(["margin-bottom:var(--space-sm);font-size:var(--font-xs);color:var(--grey3);font-weight:var(--bold);line-height:var(--font-xs-lh);transition:all 0.3s var(--ease-in-out);"]);

exports.Label = Label;

var Items = _styledComponents.default.div.withConfig({
  displayName: "styles__Items"
})(["display:flex;flex-direction:column;align-items:flex-start;padding:2px;border-radius:4px;transition:all 0.3s var(--ease-in-out);> div{margin:0;}"]);

exports.Items = Items;

var Error = _styledComponents.default.div.withConfig({
  displayName: "styles__Error"
})(["padding-top:2px;transform:translateY(", ");opacity:", ";font-size:var(--font-xs);color:var(--error);transition:all 0.3s var(--ease-in-out);"], function (_ref) {
  var error = _ref.error;
  return error ? 0 : 'var(--space-md)';
}, function (_ref2) {
  var error = _ref2.error;
  return error ? 1 : 0;
});

exports.Error = Error;