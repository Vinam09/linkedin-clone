import React,{useEffect} from 'react';
import './App.css';
import {login,logout,selectUser} from "./features/userSlice";
import {useDispatch, useSelector} from "react-redux";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Login from "./Login";
import {auth} from './firebase';
import Widgets from './Widgets';

function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  // TODO On Refresh loses Sign in

  useEffect(() => {
    auth.onAuthStateChanged((userAuth => {
      if(userAuth){
        //User Logged in
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photourl: userAuth.photoURL,
        }));
      }else{
        //User Logged out
        dispatch(logout());
      }
    }));
    
  }, []);


  return (
    <div className="app">
    
       

      {!user ? <Login /> : (
      <div>
      <Header />
      <div className ="app-body">
         
          <Sidebar />
          <Feed />
          <Widgets />
      </div>
      </div>
      )}

    </div>
  );
}

export default App;
