import createSagaMiddleware from 'redux-saga'
import middlewareRequest from '../Redux/Middleware/MiddlewareRequest'

export const sagaMiddleware = createSagaMiddleware(middlewareRequest)
//sagaMiddleware.run(middlewareRequest)