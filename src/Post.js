import { Avatar } from '@material-ui/core';
import ThumbUpAltOutlinedIcon  from '@material-ui/icons/ThumbUpAltOutlined';
import ChatOutlinedIcon  from '@material-ui/icons/ChatOutlined';
import ShareOutlinedIcon  from '@material-ui/icons/ShareOutlined';
import SendOutlinedIcon  from '@material-ui/icons/SendOutlined';
import React, {forwardRef} from 'react';
import './Post.css';
import InputBtn from './InputBtn';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';


const Post = forwardRef(({name,description, message, photoUrl}, ref) => {

    const user = useSelector(selectUser);
    return (
        <div ref={ref} className='post'>
            <div className="post-header">
                <Avatar src={photoUrl}></Avatar>
                <div className="post-info">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>
            <div className="post-body">
                <p>{message}</p>
            </div>
            <div className="post-btns">
                <InputBtn Icon={ThumbUpAltOutlinedIcon} title="Like" color='gray'/>
                <InputBtn Icon={ChatOutlinedIcon} title="Comment" color='gray'/>
                <InputBtn Icon={ShareOutlinedIcon} title="Share" color='gray'/>
                <InputBtn Icon={SendOutlinedIcon} title="Send" color='gray'/>
            </div>
        </div>
    )
})

export default Post
