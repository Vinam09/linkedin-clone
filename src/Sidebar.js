import { Avatar } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'
import './Sidebar.css'

function Sidebar() {

    const user = useSelector(selectUser);

    const recentItem =(topic) => (
        <div className="sidebar-recent">
            <span className="sidebar-hash">#</span>
            <p>{topic}</p>
        </div>
    )

    return (
        <div className ="sidebar">
            <div className="sidebar-top">
                <img src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80"
                 alt="Profile Picture"/>
                <Avatar src={user.photoUrl} className="sidebar-avatar"/>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>

            <div className ="sidebar-stats">
                <div className ="sidebar-stat">
                    <p>Who viewed you</p>
                    <p className="stat-num">1,994</p>
                </div>
                <div className="sidebar-stat">
                    <p>Views on post</p>
                    <p className="stat-num">1,966</p>
                </div>
            </div>


            <div className="sidebar-bottom">
                <p>Recent</p>
                {recentItem('reactjs')}
                {recentItem('programming')}
                {recentItem('design')}
                {recentItem('web development')}
                {recentItem('nodejs')}
            </div>
        </div>
    );
}

export default Sidebar;

