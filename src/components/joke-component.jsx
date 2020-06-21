import React from 'react'
import {connect} from 'react-redux'

import BigCart from '../UIkit/bigCart/bigCart'
import actionFavorite from '../Redux/actions/actionFavorite'


const JokeComponent = ({data, actionFavorite, favorite}) => {

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
    }
}

const mapToDispatchToProps = {
        actionFavorite: actionFavorite,
}

export default connect(mapStateToProps, mapToDispatchToProps)(JokeComponent)