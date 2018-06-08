"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Input = _interopRequireDefault(require("./Input"));

var _Checkbox = _interopRequireDefault(require("./Checkbox"));

var _CheckboxGroup = _interopRequireDefault(require("./CheckboxGroup"));

var _RadioGroup = _interopRequireDefault(require("./RadioGroup"));

var _Select = _interopRequireDefault(require("./Select"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  Input: _Input.default,
  Checkbox: _Checkbox.default,
  CheckboxGroup: _CheckboxGroup.default,
  RadioGroup: _RadioGroup.default,
  Select: _Select.default
};
exports.default = _default;