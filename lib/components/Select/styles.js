"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Option = exports.StyledSelect = exports.InputWrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactSelect = _interopRequireDefault(require("react-select"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getColor = function getColor(_ref) {
  var focused = _ref.focused,
      error = _ref.error;
  return error && !focused ? 'var(--error)' : focused ? 'var(--primary2)' : 'var(--grey3)';
};

var InputWrapper = _styledComponents.default.div.withConfig({
  displayName: "styles__InputWrapper"
})(["z-index:1;position:relative;border-radius:4px;width:256px;height:40px;display:flex;align-items:center;justify-content:center;.border{overflow:hidden;box-sizing:content-box;z-index:1;position:absolute;top:0;left:0;right:0;bottom:0;display:flex;align-items:center;justify-content:center;box-shadow:inset 0 0 0 1px var(--grey3);border-radius:4px;&::before{content:'';position:absolute;background-color:", ";width:", ";height:", ";transition:all 0.3s var(--ease-in-out);border-radius:4px;}&::before{top:0;left:0;}> div:first-child{z-index:2;width:100%;height:100%;border-radius:4px;background-color:#fff;border:1px solid transparent;background-clip:padding-box;}}label{z-index:2;position:absolute;top:", ";left:var(--space-md);cursor:", ";font-size:", ";color:", ";font-weight:", ";line-height:16px;transition:all 0.3s var(--ease-in-out);&::before,&::after{content:'';z-index:-1;position:absolute;top:calc(50% - 1px);width:100%;background-color:#fff;height:2px;transition:all 0.3s var(--ease-in-out) 0.1s;}&::before{left:", ";}&::after{right:", ";}}.error{position:absolute;visibility:", ";top:", ";left:var(--space-xs);font-size:var(--font-xs);color:", ";font-weight:var(--regular);transition:all 0.3s var(--ease-in-out);}"], function (props) {
  return getColor(props);
}, function (props) {
  return props.focused || props.error ? '100%' : 0;
}, function (props) {
  return props.focused || props.error ? '100%' : 0;
}, function (props) {
  return props.focused || props.filled ? '-7px' : 'calc(50% - 7px)';
}, function (props) {
  return props.focused || props.filled ? 'default' : 'text';
}, function (props) {
  return props.focused || props.filled ? 'var(--font-xs)' : 'var(--font-md)';
}, function (props) {
  return getColor(props);
}, function (props) {
  return props.focused || props.filled ? 'var(--bold)' : 'var(--regular)';
}, function (props) {
  return props.focused || props.filled ? 'var(--space-sm)' : 0;
}, function (props) {
  return props.focused || props.filled ? 'var(--space-sm)' : 0;
}, function (props) {
  return props.error ? 'visible' : 'hidden';
}, function (props) {
  return props.error ? '40px' : 0;
}, function (props) {
  return props.focused ? 'var(--grey3)' : 'var(--error)';
});

exports.InputWrapper = InputWrapper;
var StyledSelect = (0, _styledComponents.default)(_reactSelect.default).withConfig({
  displayName: "styles__StyledSelect"
})(["z-index:3;box-sizing:border-box;width:100%;height:100%;> div{padding:0;border:none;background-color:transparent;box-shadow:none;}.ruf__control{height:100%;}.ruf__value-container{padding:0 0 0 var(--space-md);}"]);
exports.StyledSelect = StyledSelect;

var Option = _styledComponents.default.div.withConfig({
  displayName: "styles__Option"
})(["cursor:pointer;display:flex;align-items:center;height:32px;padding:0 6px;font-size:var(--font-md);line-height:20px;color:", ";border-left:2px solid ", ";transition:all 0.225s var(--ease-in-out);"], function (props) {
  return props.isFocused ? 'var(--primary2)' : 'var(--grey2)';
}, function (props) {
  return props.isFocused ? 'var(--primary2)' : 'transparent';
});

exports.Option = Option;