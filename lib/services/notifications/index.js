"use strict";

var _notificationsReducer = _interopRequireDefault(require("./notificationsReducer"));

var _withNotifications = _interopRequireDefault(require("./withNotifications"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  notificationsReducer: _notificationsReducer.default,
  withNotifications: _withNotifications.default
};