import React, {useEffect} from 'react'
import { connect } from 'react-redux'

import FavoriteCart from '../UIkit/favoriteCart/favoriteCart'
import actionDataFavorite from '../Redux/actions/actionDataFavotite'

const FavoriteComponent = ({ favorite, favoriteData, actionDataFavorite }) => {
    //const { id, value, updated_at, categories } = favorite;

    const coincidence = favoriteData.find((elem) => elem.value === favorite.value)

    useEffect(()=>{
        if(!coincidence){
            actionDataFavorite([...favoriteData, favorite])
        }
        else{
            let upData = favoriteData.filter((el) => el.value  !==  favorite.value  )
            actionDataFavorite([...upData])
        }
    },
    [favorite]
    )
    
    const favoriteElement = favoriteData.map((item) => {
        if(item.value){
            return (<div key={item.id}>
                <FavoriteCart id={item.id} value={item.value} updated_at={item.updated_at} categories={item.categories} />
            </div>)
        }
        
    })
    return (<div>
        {favoriteElement}
    </div>)
}

const mapStateToProps = (store) => {
    return {
                favorite: store.reducerFavorite.favorite,
                favoriteData: store.reducerDataFavorite.list_favorite
            }
}

const mapToDispatchToProps  = {
    actionDataFavorite: actionDataFavorite
}


export default connect(mapStateToProps, mapToDispatchToProps)(FavoriteComponent)



