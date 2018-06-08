"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _validators = _interopRequireDefault(require("./validators"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var validate = function validate(type, errors, name, value, validationObj, values) {
  if (!validationObj.message) {
    console.error("Validation error. Field \"".concat(name, "\" doesn't have defined message for rule \"").concat(type, "\"."));
  }

  if (_validators.default[type](name, value, validationObj, values)) {
    errors[name] = validationObj.message;
  }
};

var _default = function _default(FIELDS) {
  return function (values, props) {
    var errors = {};
    Object.keys(FIELDS).map(function (name) {
      var validation = FIELDS[name].validation;

      if (validation) {
        var value = values[name];
        Object.keys(validation).map(function (validationType) {
          validate(validationType, errors, name, value, validation[validationType], values);
        });
      }
    });
    return errors;
  };
};

exports.default = _default;