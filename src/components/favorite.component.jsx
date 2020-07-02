import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import FavoriteCart from '../UIkit/favoriteCart/favoriteCart'
import actionDataFavorite from '../Redux/actions/actionDataFavotite'

const FavoriteComponent = ({ actionDataFavorite, favoriteList }) => {

    const [favoriteData, onFavoriteData] = useState([])

    useEffect(() => {
        let data = JSON.parse(localStorage.getItem('favoriteListLocal'))
        if (!data || !data[0]) {
            data = favoriteList
            actionDataFavorite(data);
            onFavoriteData(data);
        } else {
            let dataUp = [...data, ...favoriteList]
            for (let i = 0; i < dataUp.length; i++) {
                let ferst = dataUp[i]
                for (let k = i + 1; k < dataUp.length; k++) {
                    if (ferst.id === dataUp[k].id) {
                        dataUp.splice(k, k)
                    }
                }
            }
            actionDataFavorite(dataUp);
            onFavoriteData(dataUp);
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('favoriteListLocal', JSON.stringify(favoriteList))
        if (favoriteList[0]) { onFavoriteData(favoriteList) };
    }, [favoriteList])


    const favoriteElement = favoriteData.map((item) => {
        if (item.value) {
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
        favoriteList: store.reducerDataFavorite.list_favorite
    }
}

const mapToDispatchToProps = {
    actionDataFavorite: actionDataFavorite
}

export default connect(mapStateToProps, mapToDispatchToProps)(FavoriteComponent)
