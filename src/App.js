import React, { Component } from 'react';
import totalReducers from './reducers/index.js';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import Counter from './components/counters';

const store = createStore(totalReducers);

export default class App extends Component{
  render(){
    return(
      <Provider store= {store}>
        <Counter />
      </Provider>
    );
  }
}