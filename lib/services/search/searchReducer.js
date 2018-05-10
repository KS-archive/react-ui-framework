import queryString from 'query-string';
import { objRemove } from '../../utils/immutable';
import { SET_SEARCH } from './actions';

const reducer = (state = { query: '' }, action) => {
  if (action.type === SET_SEARCH) {
    const lastParams = queryString.parse(action.history.location.search);
    const { toChange, anyChanges } = Object.keys(action.payload).reduce((a, key) => {
      if (action.payload[key] !== state[key]) {
        a.toChange[key] = action.payload[key];
        a.anyChanges = true;
      }
      return a;
    }, { toChange: {}, anyChanges: false });

    const newParams = { ...lastParams, ...toChange };
    const urlNewParams = newParams.query ? newParams : objRemove(newParams, 'query');

    action.history.push({
      pathname: action.history.location.pathname,
      search: queryString.stringify(urlNewParams),
    });

    return (anyChanges) ? { ...state, ...toChange } : state;
  }

  return state;
};

export default {
  search: reducer,
};
