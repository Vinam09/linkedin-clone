import { Avatar } from '@material-ui/core';
import React from 'react'
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import './HeaderTab.css'

function HeaderTab({avatar,Icon,title, onClick}) {

    const user = useSelector(selectUser);
    return (
        <div onClick={onClick} className="headerTab">
            {Icon && <Icon className="headerTab-icon" />}
            {avatar && (
                <Avatar className='headerTab-icon'/>
                )
            }
            <h3 className="headerTab-title">{title}</h3>
        </div>
    );
}

export default HeaderTab;

