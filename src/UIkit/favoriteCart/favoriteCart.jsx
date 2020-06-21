import React from 'react'
import './favoriteCartStyle.scss'
//import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import LaunchIcon from '@material-ui/icons/Launch';
import ChatIcon from '@material-ui/icons/Chat';
import Favorite from '@material-ui/icons/Favorite';

const FavoriteCart = ({ id, value, updated_at}) => {
    return (
        <div className='box'>
            <div className='box-icon'>
            <Favorite color="secondary" />
            </div>
            <div className='box-component'>
                <div className='icon-container'>
                    <div className='icon'>
                        <ChatIcon style={{ color: '#ABABAB' }} />
                    </div>

                </div>
                <div className='context'>
                    <div className='context-url'>
                        <span>ID:</span>
                        <a>{id}</a>
                        <span><LaunchIcon style={{ color: '#8EA7FF', height: 11 }} /> </span>
                    </div>
                    <div className='context-text'>{value}</div>
                    <div className='box-data'>
                        <div className='describe'>Last update: {Math.round(Date.parse(updated_at) / 3600000)} hours ago</div>
                        <div className='categories'>
                            {/* {categories ? 'rendom' : categories} */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default FavoriteCart