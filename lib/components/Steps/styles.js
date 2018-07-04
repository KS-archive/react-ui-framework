"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Rectangle = exports.Circle = exports.Wrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getCircleBorderColor = function getCircleBorderColor(index, step) {
  return index <= step ? 'primary1' : 'grey5';
};

var getCircleBgColor = function getCircleBgColor(index, step) {
  return index === step ? 'primary1' : 'background';
};

var getRectangleBgColor = function getRectangleBgColor(index, step) {
  return index < step ? 'primary1' : 'grey5';
};

var getFontColor = function getFontColor(index, step) {
  return index === step ? 'white-hover' : index < step ? 'primary1' : 'grey5';
};

var Wrapper = _styledComponents.default.div.withConfig({
  displayName: "styles__Wrapper"
})(["margin:0;padding:0;display:flex;align-items:center;"]);

exports.Wrapper = Wrapper;

var Circle = _styledComponents.default.div.withConfig({
  displayName: "styles__Circle"
})(["width:44px;height:44px;border-width:2px;border-style:solid;border-radius:50%;font-family:Roboto;font-size:16px;display:flex;justify-content:center;align-items:center;", ""], function (props) {
  var borderColor = getCircleBorderColor(props.index, props.step);
  var bgColor = getCircleBgColor(props.index, props.step);
  var color = getFontColor(props.index, props.step);
  return "\n      border-color: var(--".concat(borderColor, ");\n      background-color: var(--").concat(bgColor, ");\n      color: var(--").concat(color, ");\n    ");
});

exports.Circle = Circle;

var Rectangle = _styledComponents.default.div.withConfig({
  displayName: "styles__Rectangle"
})(["width:84px;height:2px;", ""], function (props) {
  var bgColor = getRectangleBgColor(props.index, props.step);
  return "\n      background-color: var(--".concat(bgColor, ");\n    ");
});

exports.Rectangle = Rectangle;