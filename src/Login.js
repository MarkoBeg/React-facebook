import React from 'react'
import { auth, google } from './firebase'
import './Login.css'
import { useDispatch } from "react-redux";
import { login } from "./features/userSlice";



export default function Login() {
    const dispatch = useDispatch();

    const Login = () =>{
        auth.signInWithPopup(google).then(({user}) => {
            console.log(user) 
            dispatch(login({
                displayName: user.displayName,
                profilePic: user.photoURL,
                
            }))
        })
        .catch((error) => alert(error))
    }

    return (
        <div className="login">
            <div className="login-items">
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="logo" />
                <button className="btn-login" onClick={Login}>Login</button>
            </div>
        </div>
    )
}
