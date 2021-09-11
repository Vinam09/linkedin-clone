import React, {useEffect, useState} from 'react';
import './Feed.css';
import InputBtn from './InputBtn';
import Post from './Post';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';


import CreateIcon from "@material-ui/icons/Create";
import ImageIcon from "@material-ui/icons/Image";
import EventNoteIcon from "@material-ui/icons/EventNote";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import CalendarViewIcon from "@material-ui/icons/CalendarViewDay";
import { firebase, auth, db } from './firebase.js';
import FlipMove from "react-flip-move";


function Feed() {
    const user = useSelector(selectUser);

    const[input, setInput] = useState("");
    const[posts,setPosts] = useState([]);

    useEffect(()=> {
        db.collection("posts").orderBy("timestamp","desc")
        .onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => (
                {
                    id: doc.id,
                    data: doc.data(),
                }
            )))
        ))
    },[])

    const sendPost = e => {
        e.preventDefault();

        db.collection('posts').add({
            name:user.displayName,
            description: user.email,
            message: input,
            photoUrl: user.photourl || "",
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });

        setInput("");
    };


    return (
        <div className="feed">
            <div className="feed-input-container">
                <div className="feed-input">
                    <CreateIcon />
                    <form>
                        <input value={input}
                         onChange={e => setInput(e.target.value)} type="text"/>
                        <button onClick={sendPost} type="submit">Send</button>
                    </form>
                </div>
                <div className="feed-input-btns">
                    <InputBtn title="Photo" Icon={ImageIcon} color="#70B5F9" />
                    <InputBtn title="Event" Icon={EventNoteIcon} color="#C0CBCD" />
                    <InputBtn title="Video" Icon={SubscriptionsIcon} color="#E7A33E" />
                    <InputBtn title="Write Article" Icon={CalendarViewIcon} color="#7FC15E" />
                </div>
            </div>
            <FlipMove>
                {posts.map(({id, data:{name,description,message,photoUrl}})=>(
                    <Post
                        key={id}
                        name={name}
                        description={description}
                        message={message}
                        photoUrl={photoUrl}
                    />
                ))}
            </FlipMove>        
        </div>
    )
}

export default Feed;
