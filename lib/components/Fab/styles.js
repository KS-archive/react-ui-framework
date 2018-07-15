"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Wrapper = exports.SmallFab = exports.BigFab = exports.Badge = exports.Container = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactTippy = require("react-tippy");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getPosition = function getPosition(_ref) {
  var position = _ref.position,
      offset = _ref.offset;

  switch (position) {
    case 'left top':
      return "top: ".concat(40 + offset[1], "px; left: ").concat(40 + offset[0], "px;");

    case 'left center':
      return "top: calc(50vh + ".concat(offset[1] - 28, "px); left: ").concat(40 + offset[0], "px;");

    case 'left bottom':
      return "bottom: ".concat(40 + offset[1], "px; left: ").concat(40 + offset[0], "px;");

    case 'center top':
      return "top: ".concat(40 + offset[1], "px; left: calc(50vw + ").concat(offset[0] - 28, "px);");

    case 'center bottom':
      return "bottom: ".concat(40 + offset[1], "px; left: calc(50vw + ").concat(offset[0] - 28, "px);");

    case 'right top':
      return "top: ".concat(40 + offset[1], "px; right: ").concat(40 + offset[0], "px;");

    case 'right center':
      return "top: calc(50vh + ".concat(offset[1] - 28, "px); right: ").concat(40 + offset[0], "px;");

    default:
      return "bottom: ".concat(40 + offset[1], "px; right: ").concat(40 + offset[0], "px;");
  }
};

var getOffsetValue = function getOffsetValue(pos) {
  return pos ? "".concat(pos * 64 + 16) : 8;
};

var getItemOffset = function getItemOffset(_ref2) {
  var pos = _ref2.pos,
      position = _ref2.position;

  if (position.includes('top')) {
    return "left: 8px; top: ".concat(getOffsetValue(pos), "px;");
  } else if (position === 'left center') {
    return "left: ".concat(getOffsetValue(pos), "px; top: 8px;");
  } else if (position === 'right center') {
    return "right: ".concat(getOffsetValue(pos), "px; top: 8px;");
  }

  return "left: 8px; bottom: ".concat(getOffsetValue(pos), "px;");
};

var Container = _styledComponents.default.div.withConfig({
  displayName: "styles__Container"
})(["position:fixed;", " width:56px;height:56px;z-index:110;& > div:first-child > div > div:first-child{transition:all 0.3s;opacity:", ";transform:scale(", ");}& > div:first-child > div > div:last-child{transition:all 0.3s;opacity:", ";transform:scale(", ");}@media (max-width:580px){right:20px;bottom:20px;}"], function (props) {
  return getPosition(props);
}, function (props) {
  return props.open ? 0 : 1;
}, function (props) {
  return props.open ? 0 : 1;
}, function (props) {
  return props.open ? 1 : 0;
}, function (props) {
  return props.open ? 1 : 0;
});

exports.Container = Container;

var Badge = _styledComponents.default.div.withConfig({
  displayName: "styles__Badge"
})(["position:relative;", ""], function (_ref3) {
  var count = _ref3.count;
  return count && "\n    &::after {\n      content: '".concat(count, "';\n      z-index: 112;\n      display: block;\n      box-sizing: border-box;\n      position: absolute;\n      top: -4px;\n      right: -6px;\n      height: var(--space-lg);\n      min-height: var(--space-lg);\n      min-width: var(--space-lg);\n      padding: 0 var(--space-xs);\n      border-radius: calc(var(--space-lg) / 2);\n      background-color: var(--accent1);\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      text-align: center;\n      color: #fff;\n      font-family: var(--mainFont);\n      font-size: var(--font-sm);\n      font-weight: var(--bold);\n    }\n  ");
});

exports.Badge = Badge;
var BigFab = (0, _styledComponents.default)(_reactTippy.Tooltip).withConfig({
  displayName: "styles__BigFab"
})(["position:relative;z-index:111;width:56px;height:56px;border-radius:100%;background-color:var(--primary2);transition:all 0.3s;align-items:center;justify-content:center;box-shadow:1px 1px 3px var(--grey1);display:flex !important;cursor:pointer;&:hover{background-color:var(--primary2-hover);}&:active{background-color:var(--primary2-active);}div{display:flex;align-items:center;justify-content:center;width:20px;height:20px;}> div{position:absolute;top:18px;bottom:18px;left:18px;right:18px;}svg{width:20px;height:20px;fill:#fff;}path,use{fill:#fff;}"]);
exports.BigFab = BigFab;
var SmallFab = (0, _styledComponents.default)(_reactTippy.Tooltip).withConfig({
  displayName: "styles__SmallFab"
})(["width:100%;height:100%;border-radius:100%;align-items:center;display:flex !important;justify-content:center;cursor:pointer;&:hover{background-color:var(--primary2-hover);}&:active{background-color:var(--primary2-active);}div{display:flex;align-items:center;justify-content:center;width:20px;height:20px;}svg{width:20px;height:20px;fill:#fff;}path,use{fill:#fff;}"]);
exports.SmallFab = SmallFab;

var Wrapper = _styledComponents.default.div.withConfig({
  displayName: "styles__Wrapper"
})(["position:absolute;", " z-index:110;width:40px;height:40px;border-radius:100%;background-color:var(--primary2);transition:all 0.3s;align-items:center;display:flex !important;justify-content:center;box-shadow:1px 1px 3px var(--grey1);opacity:", ";"], function (props) {
  return getItemOffset(props);
}, function (_ref4) {
  var pos = _ref4.pos;
  return pos ? 1 : 0;
});

exports.Wrapper = Wrapper;