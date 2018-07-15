"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = require("styled-components");

var _default = {
  xxl: function xxl() {
    return (0, _styledComponents.css)(["@media (min-width:1600px){", "}"], _styledComponents.css.apply(void 0, arguments));
  },
  xl: function xl() {
    return (0, _styledComponents.css)(["@media (max-width:1599px){", "}"], _styledComponents.css.apply(void 0, arguments));
  },
  lg: function lg() {
    return (0, _styledComponents.css)(["@media (max-width:1199px){", "}"], _styledComponents.css.apply(void 0, arguments));
  },
  md: function md() {
    return (0, _styledComponents.css)(["@media (max-width:959px){", "}"], _styledComponents.css.apply(void 0, arguments));
  },
  sm: function sm() {
    return (0, _styledComponents.css)(["@media (max-width:767px){", "}"], _styledComponents.css.apply(void 0, arguments));
  },
  xs: function xs() {
    return (0, _styledComponents.css)(["@media (max-width:479px){", "}"], _styledComponents.css.apply(void 0, arguments));
  }
};
exports.default = _default;