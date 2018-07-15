export const SET_SEARCH = 'SET_SEARCH';

export const setSearch = (searchObj, history) => ({
  type: SET_SEARCH,
  payload: searchObj,
  history,
});
