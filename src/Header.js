import React from 'react';
import './Header.css';
import HeaderTab from './HeaderTab';

import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';

import { useSelector, useDispatch } from 'react-redux';
import {auth} from './firebase';
import {logout, selectUser} from "./features/userSlice";

export default function Header() {

    const user = useSelector(selectUser);

    const dispatch = useDispatch();

    const logoutApp = () => {
        dispatch(logout());
        auth.signOut();
    }
    return (
        <div className = 'header'>

            <div className = "header-left">
                <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                 alt="LinkedIn Logo"/>
                <div className="header-left-search">
                    <SearchIcon />
                    <input placeholder="Search" type="text"/>
                </div>
            </div>

            <div className = "header-right">
                <HeaderTab Icon={HomeIcon} title="Home" />
                <HeaderTab Icon={SupervisorAccountIcon} title="My Network" />
                <HeaderTab Icon={BusinessCenterIcon} title="Jobs" />
                <HeaderTab Icon={ChatIcon} title="Messaging" />
                <HeaderTab Icon={NotificationsIcon} title="Notifications" />
                <HeaderTab avatar ={true}
                title="Logout"
                onClick={logoutApp}    
                />
            </div>

        </div>

        
        
    );
}
