import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//First make folders we need - actions, reducers, components
//Set up the store, provider and thunk

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'

//add a reducer file to the reducer folder
//import it here
import { foxReducer as reducer } from './reducers/foxReducer';

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


