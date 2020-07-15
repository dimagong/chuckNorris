import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { logger } from 'redux-logger'
import { sagaMiddleware } from '../saga/saga'
import allReducers from '../Redux/reducers'
import middlewareRequest from '../Redux/Middleware/MiddlewareRequest'

export const store = createStore(
    allReducers,
    composeWithDevTools(applyMiddleware(sagaMiddleware, logger),
    ))

sagaMiddleware.run(middlewareRequest)