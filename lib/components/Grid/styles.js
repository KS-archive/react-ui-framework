"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Container = _interopRequireDefault(require("../Container"));

var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n  display: grid;\n  grid-template-columns: repeat(12, 1fr);\n  grid-gap: var(--grid-gap);\n"]);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var _default = _Container.default.extend(_templateObject);

exports.default = _default;