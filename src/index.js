import './index.css';
import reportWebVitals from './reportWebVitals';
import React from 'react'
import { render } from 'react-dom'
import generateTree from './generateTree'
import reducer from './reducers'
import Node from './containers/Node'
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const tree = generateTree()
const store = createStore(reducer, tree)

render(
  <Provider store={store}>
    <Node id={0} />
  </Provider>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
