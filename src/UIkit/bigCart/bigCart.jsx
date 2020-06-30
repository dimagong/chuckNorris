import React, {useState} from 'react'
import './bigCart-style.scss';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import LaunchIcon from '@material-ui/icons/Launch';
import ChatIcon from '@material-ui/icons/Chat';

import Favorite from '@material-ui/icons/Favorite';


const BigCart = ({ id, value, updated_at, categories, onChouseFavorite }) => {

    const dataFavorite = {id, value, updated_at, categories}

    const[flag, onFlag] = useState(false)

    const reversFlagAndFavorite = () => {
        onFlag(!flag)
        onChouseFavorite(dataFavorite)
    }

    


    return (
        <div className='boxcart'>
            <div className='boxcart-icon' onClick={reversFlagAndFavorite}>
                {flag ? <Favorite color="secondary" /> : <FavoriteBorderIcon style={{ color: '#FF6767' }} />}
            </div>
            <div className='boxcart-component'>
                <div className='icon-boxcart-container'>
                    <div className='icon-boxcart'>
                        <ChatIcon style={{ color: '#ABABAB' }} />
                    </div>

                </div>
                <div className='context-boxcart'>
                    <div className='context-url-boxcart'>
                        <span>ID:</span>
                        <a>{id}</a>
                        <span><LaunchIcon style={{ color: '#8EA7FF', height: 11 }} /> </span>
                    </div>
                    <div className='context-text-boxcart'>{value}</div>
                    <div className='box-data-boxcart'>
                        <div className='describe-boxcart'>Last update: {Math.round(Date.parse(updated_at) / 3600000)} hours ago</div>
                        <div className='categories-boxcart'>
                            {(categories == '' ) ? 'rendom' : categories}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default BigCart
