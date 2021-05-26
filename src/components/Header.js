import React from 'react'
import '../css/Header.css'
import SearchIcon from '@material-ui/icons/Search';
import AddCircleOutlinedIcon from '@material-ui/icons/AddCircleOutlined';
import NotificationsOutlinedIcon from '@material-ui/icons/NotificationsOutlined';
import { Avatar, IconButton } from '@material-ui/core';
import avatar from '../resources/avatar.jpg'

function Header() {
    return (
        <div className='header'>
            <div className="header__left d-none d-md-block">
                <div className="header__input">
                    <SearchIcon style={{color: "#72777e"}} />
                    <input type="text" placeholder="Search for anything" />
                </div>
            </div>
            
            <div className="header__right">
                <IconButton>
                    <AddCircleOutlinedIcon style={{color: "#2F80ED", fontSize: 45}} />
                </IconButton>
                <IconButton>
                    <NotificationsOutlinedIcon fontSize="large" style={{color: "#000000", marginRight: "10px"}} />
                    <div className="newNotifs"></div>
                </IconButton>
                <div className="header__info">
                    <Avatar src={avatar} style={{marginLeft: "15px"}} />
                    <h5 style={{margin: "0 5px"}}>Thetechnohollic</h5>
                </div>
            </div>
        </div>
    )
}

export default Header
