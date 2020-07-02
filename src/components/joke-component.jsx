import React from 'react'
import {connect} from 'react-redux'

import BigCart from '../UIkit/bigCart/bigCart'
import actionFavorite from '../Redux/actions/actionFavorite'
import actionDataFavorite from '../Redux/actions/actionDataFavotite'

const JokeComponent = ({data, actionFavorite, actionDataFavorite, favoriteList, favorite}) => {

    let dataChoose = [...data]

    for(let i = 0; i < dataChoose.length; i++ ){
        let ferst = dataChoose[i]
        for (let k = i+1; k < dataChoose.length; k++) {
            if(ferst.id === dataChoose[k].id){
                dataChoose.splice(k,k)
            }
        }
    }

    const onChouseFavorite = (elem) => {
         actionFavorite(elem)
        // actionDataFavorite(elem)
        upgradeAllFavoritData(elem)
    }

    const upgradeAllFavoritData = (item) => {

        const coincidence = favoriteList.find(
            (elem, i) => elem.value === item.value 
            )
    
            if(!coincidence){
                actionDataFavorite([...favoriteList, item])
            
                
            }
            else if( item === favoriteList.slice(-1)[0]){
                actionDataFavorite([...favoriteList]) 
                
            }
            else{
                let clearData = favoriteList.filter((el) => el.value  !==   item.value  )
                actionDataFavorite(clearData)
                
            }
            
        }


    const listData = dataChoose.map((elem)=>{
        if(elem){
            return(
                <div key={elem.id}>
                <BigCart 
                id={elem.id} 
                value={elem.value} 
                updated_at={elem.updated_at} 
                categories={elem.categories}
                onChouseFavorite={onChouseFavorite}
                />
                </div>
            )
        }
        
    })

    return(
        <div>
            {listData}
        </div>
    )
}

const mapStateToProps = (store)=>{
    return{
        data: store.reducerData.data,
        favorite: store.reducerFavorite.favorite,
        favoriteList: store.reducerDataFavorite.list_favorite,
    }
}

const mapToDispatchToProps = {
        actionFavorite: actionFavorite,
        actionDataFavorite: actionDataFavorite,
}

export default connect(mapStateToProps, mapToDispatchToProps)(JokeComponent)