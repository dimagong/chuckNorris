import {ADD_FAVORITE} from '../constants'

const STATE_INITIALE = {
    favorite: []
}

const reducerFavorite = (state = STATE_INITIALE, action) => {
    switch (action.type) {
        case (ADD_FAVORITE):
            return ({
                 ...state,
                //favorite: [...state.favorite, action.favorite]
                favorite: action.favorite
            })
        default:
            return state
               
    }
}

export default reducerFavorite