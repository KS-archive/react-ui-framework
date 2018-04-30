import { combineReducers } from 'redux';
import { formsReducer } from 'react-ui-framework/services/forms';

const rootReducer = combineReducers({
  ...formsReducer,
});

export default rootReducer;
