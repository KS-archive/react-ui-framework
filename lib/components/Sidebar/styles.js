"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Label = exports.Icon = exports.Item = exports.Links = exports.Arrow = exports.Hamburger = exports.Container = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactRouterDom = require("react-router-dom");

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
})(["width:48px;min-height:100vh;display:flex;flex-direction:column;align-items:center;border:1px solid black;color:var(--grey1)"]);

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
var Item = (0, _styledComponents.default)(_reactRouterDom.Link).withConfig({
  displayName: "styles__Item"
})(["width:48px;height:24px;margin-top:18px;display:flex;justify-content:center;align-items:center;"]);
exports.Item = Item;

var Icon = _styledComponents.default.div.withConfig({
  displayName: "styles__Icon"
})([""]);

exports.Icon = Icon;

var Label = _styledComponents.default.div.withConfig({
  displayName: "styles__Label"
})(["display:none;"]);

exports.Label = Label;