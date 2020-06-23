import React from 'react';
import ReactDOM from 'react-dom';
import { createStore,  applyMiddleware  } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import {logger} from 'redux-logger'


//import reducer from './Redux/reducers/reduceFavorite'
import allReducers from './Redux/reducers'


import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import middlewareRequest from './Redux/Middleware/MiddlewareRequest'



const sagaMiddleware = createSagaMiddleware(middlewareRequest)
//const store = createStore(reducer)
const store = createStore(allReducers,  composeWithDevTools(applyMiddleware(sagaMiddleware, logger),))
sagaMiddleware.run(middlewareRequest)

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
