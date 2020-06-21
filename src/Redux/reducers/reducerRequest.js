import {REQUEST} from '../constants'

const INITIAL_STATE = {
    endpoint: []
}

const reducerRequest = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case REQUEST:
            return({
                ...state,
                endpoint:  [...action.endpoint]
            })
        default:
           return state
    }
}

export default reducerRequest