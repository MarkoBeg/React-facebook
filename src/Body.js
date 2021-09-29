import React from 'react'
import CardMain from './CardMain'
import './Body.css'
import SendMessage from './SendMessage'
import Post from './Post'
import me from './images/avatar.jpg'
import {useState, useEffect} from 'react'
import {db} from './firebase'



export default function Body() {

    const [posts, setPosts] = useState([])

    
    useEffect(()=>{
        db.collection('posts').orderBy('timestamp', 'desc').onSnapshot((snapshot) =>{
            setPosts(snapshot.docs.map((item)=>({
                id: item.id,
                data: item.data()
            })))
        })
    },[])
    return (
        <div className="body">
            <CardMain></CardMain>
            <SendMessage></SendMessage>
            <div className="post-body">
                <Post 
                username='Marko'
                profilePic={me} 
                image='https://images.unsplash.com/photo-1580554530778-ca36943938b2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80'
                timestamp='Time'
                message='this is a message'
                >
                </Post>
                {posts.map(({id, data: {username, message, profilePic, timestamp, image}})=>{
                    return (
                        <Post 
                        key={id}
                        username={username}
                        message={message}
                        timestamp={new Date(timestamp?.seconds * 1000).toUTCString()}
                        profilePic={profilePic}
                        image={image}
                        ></Post>
                    )
                })} 
            </div>
        </div>
    )
}
