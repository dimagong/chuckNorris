import { combineReducers } from 'redux'

import reducerFavorite from './reducerFavorite'
import reducerData from './reducerData'
import reducerRequest from './reducerRequest'
import reducerDataFavorite from './reducerDataFavorite'

const allReducers = combineReducers({
    reducerFavorite,
    reducerData,
    reducerRequest,
    reducerDataFavorite
})

export default allReducers