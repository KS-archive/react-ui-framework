"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _utils = require("../../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject5() {
  var data = _taggedTemplateLiteral(["grid-column: ", ";"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["grid-column: ", ";"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["grid-column: ", ";"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["grid-column: ", ";"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["grid-column: ", ";"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var _default = _styledComponents.default.div.withConfig({
  displayName: "GridItem"
})(["grid-column:", ";", " ", " ", " ", " ", ""], function (props) {
  return props.xxl;
}, _utils.media.xl(_templateObject(), function (props) {
  return props.xl;
}), _utils.media.lg(_templateObject2(), function (props) {
  return props.lg;
}), _utils.media.md(_templateObject3(), function (props) {
  return props.md;
}), _utils.media.sm(_templateObject4(), function (props) {
  return props.sm;
}), _utils.media.xs(_templateObject5(), function (props) {
  return props.xs;
}));

exports.default = _default;