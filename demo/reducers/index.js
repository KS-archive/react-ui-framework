import { combineReducers } from 'redux';
import { formsReducer } from 'react-ui-framework/services/forms';
import { notificationsReducer } from 'react-ui-framework/services/notifications';
import { searchReducer } from 'react-ui-framework/services/search';

const rootReducer = combineReducers({
  ...formsReducer,
  ...notificationsReducer,
  ...searchReducer,
});

export default rootReducer;
