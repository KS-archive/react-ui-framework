"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _actions = require("./actions");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    query: ''
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  if (action.type === _actions.SET_SEARCH) {
    var _Object$keys$reduce = Object.keys(action.payload).reduce(function (a, key) {
      if (action.payload[key] !== state[key]) {
        a.toChange[key] = action.payload[key];
        a.anyChanges = true;
      }

      return a;
    }, {
      toChange: {},
      anyChanges: false
    }),
        toChange = _Object$keys$reduce.toChange,
        anyChanges = _Object$keys$reduce.anyChanges;

    return anyChanges ? _objectSpread({}, state, toChange) : state;
  }

  return state;
};

var _default = {
  search: reducer
};
exports.default = _default;