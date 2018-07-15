"use strict";

var _searchReducer = _interopRequireDefault(require("./searchReducer"));

var _withSearch = _interopRequireDefault(require("./withSearch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  searchReducer: _searchReducer.default,
  withSearch: _withSearch.default
};