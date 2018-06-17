"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Footer = exports.Content = exports.Title = exports.Header = exports.CloseButton = exports.StyledDialog = exports.Mask = exports.Container = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Container = _styledComponents.default.div.withConfig({
  displayName: "styles__Container"
})(["position:fixed;top:0;left:0;right:0;bottom:0;z-index:100;display:", ";align-items:center;justify-content:center;animation:", " both ease-in;> div:last-child > div:first-child{display:flex;align-items:center;justify-content:center;}"], function (props) {
  return !props.isShow && 'none';
}, function (props) {
  return "modal-fade-".concat(props.animationType, " ").concat(props.duration, "ms");
});

exports.Container = Container;

var Mask = _styledComponents.default.div.withConfig({
  displayName: "styles__Mask"
})(["position:fixed;background:rgba(0,0,0,0.3);top:0;left:0;right:0;bottom:0;z-index:100;"]);

exports.Mask = Mask;

var StyledDialog = _styledComponents.default.div.withConfig({
  displayName: "styles__StyledDialog"
})(["position:relative;width:", ";max-width:calc(100vw - var(--space-xl));margin:var(--space-xl) 0;z-index:101;border-left:4px solid ", ";padding:var(--space-lg);background:#fff;border-radius:4px;box-shadow:0 1px 3px rgba(0,0,0,0.2);animation:", " both cubic-bezier(0.4,0,0,1.5);", " &:focus{outline:none;}"], function (_ref) {
  var width = _ref.width;
  return typeof width === 'string' ? width : "".concat(width, "px");
}, function (props) {
  return props.color;
}, function (props) {
  return "modal-".concat(props.animationName, "-").concat(props.animationType, " ").concat(props.duration, "ms");
}, function (props) {
  return props.overSize && 'align-self: flex-start;';
});

exports.StyledDialog = StyledDialog;

var CloseButton = _styledComponents.default.div.withConfig({
  displayName: "styles__CloseButton"
})(["cursor:pointer;position:absolute;top:var(--space-md);right:var(--space-md);font-size:var(--font-sm);color:var(--text3);font-weight:var(--fa-light);"]);

exports.CloseButton = CloseButton;

var Header = _styledComponents.default.div.withConfig({
  displayName: "styles__Header"
})(["display:flex;padding-bottom:var(--space-md);svg{margin-right:var(--space-md);}"]);

exports.Header = Header;

var Title = _styledComponents.default.div.withConfig({
  displayName: "styles__Title"
})(["font-family:var(--headerFont);font-size:var(--font-md);line-height:var(--font-md-lh);font-weight:var(--bold);color:var(--text1);"]);

exports.Title = Title;

var Content = _styledComponents.default.div.withConfig({
  displayName: "styles__Content"
})(["font-family:var(--mainFont);font-size:var(--font-sm);line-height:var(--font-sm-lh);font-weight:var(--regular);color:var(--text2);"]);

exports.Content = Content;

var Footer = _styledComponents.default.div.withConfig({
  displayName: "styles__Footer"
})(["margin-top:var(--space-lg);display:flex;align-items:center;justify-content:flex-end;> button:not(:first-child){margin-left:var(--space-md);}"]);

exports.Footer = Footer;