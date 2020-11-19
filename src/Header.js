import React from 'react';
import "./header.css";
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import ForumIcon from '@material-ui/icons/Forum'


function Header() {
    return (
        <div className='header'>
            {/* <h1> i am header</h1> */}
            <IconButton>
                <PersonIcon fontSize="large" className='header_icon' />
            </IconButton>
            <img
                className='header_logo'
                src='https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png'
                alt='' />
            <IconButton>
                <ForumIcon fontSize='large' className='header_icon' />
            </IconButton>
        </div>
    )
}

export default Header
