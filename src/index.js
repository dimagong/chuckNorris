import React from 'react';
import ReactDOM from 'react-dom';
//import { createStore, applyMiddleware } from 'redux'
//import createSagaMiddleware from 'redux-saga'
import { Provider } from 'react-redux'
//import { composeWithDevTools } from 'redux-devtools-extension'
//import { logger } from 'redux-logger'

import { store } from './store/store'

//import reducer from './Redux/reducers/reduceFavorite'
//import allReducers from './Redux/reducers'

import App from './App';
import * as serviceWorker from './serviceWorker';
//import middlewareRequest from './Redux/Middleware/MiddlewareRequest'
import './index.css';


//const sagaMiddleware = createSagaMiddleware(middlewareRequest)
//const store = createStore(reducer)
//const store = createStore(allReducers, composeWithDevTools(applyMiddleware(sagaMiddleware, logger),))
//sagaMiddleware.run(middlewareRequest)

ReactDOM.render(

  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
  ,
  document.getElementById('root')
);


serviceWorker.unregister();
