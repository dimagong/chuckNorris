import {ADD_FAVORITE} from '../constants'

const actionFavorite = (item) => {
    return ({
        type: ADD_FAVORITE,
        favorite: item
    })
}

export default actionFavorite