import React, { Component } from 'react';
import Navigation from './Navigation';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './rootReducer';

export var store = createStore(rootReducer);

export default App => (
  <Provider store={store}>
    <Navigation />
  </Provider>
);
