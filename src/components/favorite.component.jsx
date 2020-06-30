import React, {useEffect} from 'react'
import { connect } from 'react-redux'

import FavoriteCart from '../UIkit/favoriteCart/favoriteCart'
import actionDataFavorite from '../Redux/actions/actionDataFavotite'

const FavoriteComponent = ({ favorite, favoriteList, actionDataFavorite }) => {
    
    const coincidence = favoriteList.find(
        (elem, i) => elem.value === favorite.value 
        )

    useEffect(()=>{
        if(!coincidence){
            actionDataFavorite([...favoriteList, favorite]) 
        }
        else if(favorite == favoriteList.slice(-1)[0]){
            actionDataFavorite([...favoriteList]) 
        }
        else{
            let clearData = favoriteList.filter((el) => el.value  !==  favorite.value  )
            actionDataFavorite(clearData)
        }
    },
    []
    );
    
    const favoriteElement = favoriteList.map((item) => {
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
                favoriteList: store.reducerDataFavorite.list_favorite
            }
}

const mapToDispatchToProps  = {
    actionDataFavorite: actionDataFavorite
}


export default connect(mapStateToProps, mapToDispatchToProps)(FavoriteComponent)



