import './index.css';
import reportWebVitals from './reportWebVitals';
import React from 'react'
import { render } from 'react-dom'
import App from './components/App'
import reducer from './reducers'
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const store = createStore(reducer)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
