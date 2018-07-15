"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Filled = exports.Ghost = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var getColor = function getColor(kind) {
  return kind === 'primary' ? 'primary2' : kind === 'accent' ? 'accent1' : kind === 'white' ? 'white' : kind === 'grey' ? 'grey2' : kind;
};

var getSizeData = function getSizeData(size) {
  return size === 'md' ? ['font-md', '40px'] : size === 'lg' ? ['font-md', '48px'] : ['font-sm', '32px'];
};

var ButtonBase = _styledComponents.default.button.withConfig({
  displayName: "styles__ButtonBase"
})(["user-select:none;cursor:pointer;overflow:hidden;display:flex;align-items:center;justify-content:center;box-sizing:border-box;padding:4px 16px;min-width:96px;outline:none;border:none;border-radius:4px;font-family:var(--mainFont);font-weight:var(--medium);line-height:1;transition:all 0.3s var(--ease-in-out);", " &:hover{transition:all 0.3s var(--ease-in-out);}&:active{transition:all 0.3s var(--ease-out);}"], function (props) {
  var sizeArray = getSizeData(props.size);
  return "\n      font-size: var(--".concat(sizeArray[0], ");\n      height: ").concat(sizeArray[1], ";\n    ");
});

var Ghost = ButtonBase.extend(_templateObject(), function (props) {
  var colorBase = getColor(props.kind);
  return "\n      background-color: transparent;\n      color: var(--".concat(colorBase, ");\n      border: 1px solid var(--").concat(colorBase, ");\n\n      &:hover {\n        color: var(--").concat(colorBase, "-hover);\n        border: 1px solid var(--").concat(colorBase, "-hover);\n        background-color: rgba(255, 255, 255, 0.04);\n      }\n\n      &:active {\n        color: var(--").concat(colorBase, "-active);\n        border: 1px solid var(--").concat(colorBase, "-active);\n        background-color: rgba(0, 0, 0, 0.04);\n      }");
});
exports.Ghost = Ghost;
var Filled = ButtonBase.extend(_templateObject2(), function (props) {
  return props.kind === 'white' ? 'var(--grey2)' : '#fff';
}, function (props) {
  var colorBase = getColor(props.kind);
  return "\n      background-color: var(--".concat(colorBase, ");\n      border: 1px solid var(--").concat(colorBase, ");\n\n      &:hover {\n        background-color: var(--").concat(colorBase, "-hover);\n        border: 1px solid var(--").concat(colorBase, "-hover);\n      }\n\n      &:active {\n        background-color: var(--").concat(colorBase, "-active);\n        border: 1px solid var(--").concat(colorBase, "-active);\n      }");
});
exports.Filled = Filled;