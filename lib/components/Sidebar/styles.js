"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Label = exports.Icon = exports.Link = exports.Links = exports.Arrow = exports.Hamburger = exports.Container = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const getColor = kind => do {
//   if (kind === 'primary') 'primary2';
//   else if (kind === 'accent') 'accent1';
//   else if (kind === 'white') 'white';
//   else if (kind === 'grey') 'grey2';
//   else kind;
// };
var Container = _styledComponents.default.div.withConfig({
  displayName: "styles__Container"
})(["width:48px;min-height:100vh;display:flex;flex-direction:column;align-items:center;border:1px solid black;"]);

exports.Container = Container;

var Hamburger = _styledComponents.default.div.withConfig({
  displayName: "styles__Hamburger"
})(["margin-top:16px;"]);

exports.Hamburger = Hamburger;

var Arrow = _styledComponents.default.div.withConfig({
  displayName: "styles__Arrow"
})(["display:none;"]);

exports.Arrow = Arrow;

var Links = _styledComponents.default.div.withConfig({
  displayName: "styles__Links"
})([""]);

exports.Links = Links;

var Link = _styledComponents.default.div.withConfig({
  displayName: "styles__Link"
})([""]);

exports.Link = Link;

var Icon = _styledComponents.default.div.withConfig({
  displayName: "styles__Icon"
})(["margin-top:18px;"]);

exports.Icon = Icon;

var Label = _styledComponents.default.div.withConfig({
  displayName: "styles__Label"
})(["display:none;"]);

exports.Label = Label;