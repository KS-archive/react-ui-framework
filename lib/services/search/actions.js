"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setSearch = exports.SET_SEARCH = void 0;
var SET_SEARCH = 'SET_SEARCH';
exports.SET_SEARCH = SET_SEARCH;

var setSearch = function setSearch(searchObj, history) {
  return {
    type: SET_SEARCH,
    payload: searchObj,
    history: history
  };
};

exports.setSearch = setSearch;