import React from 'react';
import ReactDOM from 'react-dom';
import { createStore,  applyMiddleware  } from 'redux'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'



//import reducer from './Redux/reducers/reduceFavorite'
import allReducers from './Redux/reducers'


import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//const store = createStore(reducer)
const store = createStore(allReducers,  composeWithDevTools(applyMiddleware(),))


ReactDOM.render(
  
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
