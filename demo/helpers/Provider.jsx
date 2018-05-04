import React from 'react';
import Provider from 'react-redux/lib/components/Provider';
import { applyMiddleware, createStore } from 'redux';
import ReduxThunk from 'redux-thunk';
import { Index } from 'react-ui-framework';
import reducers from '../reducers';

/* eslint-disable no-underscore-dangle */
const createStoreWithMiddleware = applyMiddleware(ReduxThunk)(createStore);
const store = createStoreWithMiddleware(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
/* eslint-enable */

export default ({ story, notifications = false }) => (
  <Provider store={store}>
    <Index notifications={notifications} fa="sha384-HX5QvHXoIsrUAY0tE/wG8+Wt1MwvaY28d9Zciqcj6Ob7Tw99tFPo4YUXcZw9l930">
      {story}
    </Index>
  </Provider>
);
