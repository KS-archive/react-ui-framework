"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _generateField = _interopRequireDefault(require("./generateField"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _default() {
  var valuesProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  this.Field = _generateField.default.bind(this);
  var initialValues = {};
  var _this$props = this.props,
      fields = _this$props.fields,
      initialize = _this$props.initialize;
  Object.keys(fields).map(function (name) {
    if (valuesProps[name]) {
      initialValues[name] = valuesProps[name];
    } else if (fields[name].default) {
      initialValues[name] = fields[name].default;
    }
  });
  initialize(initialValues);
}