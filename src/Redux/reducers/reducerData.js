import { GET_DATA } from '../constants'

const INITIAL_DATA_STATE = {
    data: []
}

const reducerData = (state = INITIAL_DATA_STATE, action) => {
    switch (action.type) {
        case GET_DATA:
            return {
                ...state,
                data: [...state.data, action.data]
            }
        default:
            return state
    }
}

export default reducerData