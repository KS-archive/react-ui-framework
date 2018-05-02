import { combineReducers } from 'redux';
import { formsReducer } from 'react-ui-framework/services/forms';
import { notificationsReducer } from 'react-ui-framework/services/notifications';

const rootReducer = combineReducers({
  ...formsReducer,
  ...notificationsReducer,
});

export default rootReducer;
