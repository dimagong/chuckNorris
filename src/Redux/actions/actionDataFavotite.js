import {ADD_DATA_FAVORITE} from '../constants'


const actionDataFavorite = (item) => {
    return {
        type: ADD_DATA_FAVORITE,
        data_favorite: item
    }
    
}

export default actionDataFavorite