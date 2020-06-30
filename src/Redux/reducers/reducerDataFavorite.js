import {ADD_DATA_FAVORITE} from '../constants'

const INITIAL_FAVORITE = {
    list_favorite: []
}


const reducerDataFavorite = (state = INITIAL_FAVORITE, action ) => {
    switch (action.type) {
        case ADD_DATA_FAVORITE:
            return({
                //...state,
                list_favorite: [...action.data_favorite]
            })
        default:
            return state
    }
}

export default reducerDataFavorite