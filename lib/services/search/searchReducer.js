import queryString from 'query-string';
import { SET_SEARCH } from './actions';

const reducer = (state = { query: '' }, action) => {
  if (action.type === SET_SEARCH) {
    const changes = Object.keys(action.payload).reduce((a, key) => {
      if (action.payload[key] !== state[key]) {
        a.toChange[key] = action.payload[key];
        a.anyChanges = true;
      }
      return a;
    }, { toChange: {}, anyChanges: false });

    return (changes.anyChanges) ? { ...state, ...changes.toChange } : state;
  }

  return state;
};

export default {
  search: reducer,
};
