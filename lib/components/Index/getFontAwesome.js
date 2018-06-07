"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _utils = require("../../utils");

var _enhanceHead = _interopRequireDefault(require("../../helpers/enhanceHead"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default(fa) {
  if (fa === 'free') {
    (0, _enhanceHead.default)('link', {
      rel: 'stylesheet',
      href: 'https://use.fontawesome.com/releases/v5.0.12/css/all.css',
      integrity: 'sha384-G0fIWCsCzJIMAVNQPfjH08cyYaUtMwjJwqiRKxxE/rx96Uroj1BtIQ6MLJuheaO9',
      crossorigin: 'anonymous'
    });

    _utils.styles.setValue('--fa-light', '600');
  } else if (fa === 'local') {
    (0, _enhanceHead.default)('link', {
      rel: 'stylesheet prefetch',
      href: 'https://static.fontawesome.com/css/fontawesome-app.css'
    });
    (0, _enhanceHead.default)('link', {
      rel: 'stylesheet prefetch',
      href: 'https://pro-staging.fontawesome.com/releases/v5.0.8/css/all.css'
    });

    _utils.styles.setValue('--fa-light', '300');
  } else {
    (0, _enhanceHead.default)('link', {
      rel: 'stylesheet',
      href: 'https://pro.fontawesome.com/releases/v5.0.12/css/all.css',
      integrity: fa,
      crossorigin: 'anonymous'
    });

    _utils.styles.setValue('--fa-light', '300');
  }

  return true;
};

exports.default = _default;