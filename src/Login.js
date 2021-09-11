import React, {useState} from 'react';
import './Login.css';
import { useDispatch } from 'react-redux';
import {auth} from './firebase';
import {login} from "./features/userSlice";

function Login() {


    const [email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[name, setName] = useState("");
    const[profilePic, setProfilePic] = useState("");
    const dispatch = useDispatch();

    const register = () => {
        if(!name){
            return alert("Please enter a name!")
        }

        auth.createUserWithEmailAndPassword(email,password)
        .then((userAuth) => {
            userAuth.user.updateProfile({
                displayName: name,
                photoURL: profilePic,
            })
            .then(() => {
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: name,
                    photourl: profilePic,
                }))
            })
        }).catch(error => alert(error));
    };
    
    const loginApp = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email,password)
        .then(userAuth => {
            dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: userAuth.user.displayName,
                    photourl: userAuth.user.photoURL,

            }))
        }).catch(error => alert(error));
    };

    return (
        <div className="login">
            <img src="https://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-LinkedIn_Logo.svg__1.png?itok=q_lR0Vks" alt ="LinkedIn Logo" />

            <form>
                <input value={name} onChange={e => setName(e.target.value)}
                type="text" placeholder="Name (Not required if registered)" />
                
                {/* <input value={profilePic} onChange ={e => setProfilePic(e.target.value)}
                type="text" placeholder="Profile Picture URL (Optional)" /> */}

                <input value={email} onChange ={e => setEmail(e.target.value)}
                type="email" placeholder="Email" />

                <input value={password} onChange ={e => setPassword(e.target.value)}
                 type="password" placeholder="Password" />

                <button type="submit" onClick = {loginApp}>Sign In</button>
            </form>
                <p>
                    Not a member?
                    <span onClick={register} className="signup">Sign Up Now.</span>
                </p>
        </div>
    )
}

export default Login;
