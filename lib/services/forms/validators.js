"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var required = function required(name, value) {
  if (Array.isArray(value)) {
    return value.length === 0;
  } else if (_typeof(value) === 'object' && value !== null) {
    return Object.keys(value).reduce(function (a, c) {
      return a && !value[c];
    }, true);
  }

  return !value || !String(value).trim();
};

var _default = {
  required: required,
  minLength: function minLength(name, value, _ref) {
    var number = _ref.number;
    return value && value.length < number;
  },
  maxLength: function maxLength(name, value, _ref2) {
    var number = _ref2.number;
    return value && value.length > number;
  },
  wordsMinCount: function wordsMinCount(name, value, _ref3) {
    var number = _ref3.number;
    return value && value.split(' ').length < number;
  },
  wordsMaxCount: function wordsMaxCount(name, value, _ref4) {
    var number = _ref4.number;
    return value && value.split(' ').length > number;
  },
  equalValues: function equalValues(name, value, _ref5, values) {
    var fieldToCompare = _ref5.fieldToCompare;
    return values[fieldToCompare] === value;
  }
};
exports.default = _default;