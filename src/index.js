import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import rootReducer from './store/reducers';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

const store = createStore(rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App/>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
