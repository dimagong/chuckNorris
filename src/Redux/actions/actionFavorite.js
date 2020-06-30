import {GET_NEW_FAVORITE} from '../constants'

const actionFavorite = (item) => {
    return ({
        type: GET_NEW_FAVORITE,
        favorite: item
    })
}

export default actionFavorite