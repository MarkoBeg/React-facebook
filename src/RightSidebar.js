import React from 'react'
import './RightSidebar.css'
import RightSideContacts from './RightSideContacts'
import me from './images/avatar.jpg'

export default function RightSidebar() {
    const side = (title, desc)=>{
        return (
            <div className='right-sidebar'>
                <h2>{title}</h2>
                <p>{desc}</p>
            </div>
        )
    }
    return (
        <div className="RightSidebar">
            {side('Sponsored', "stuff")}
            <div className='right-sidebar-img'>
                <img src="https://images.unsplash.com/photo-1582719201952-ea63ac1671dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1013&q=80" alt="" />
            </div>
            {side('Contacts', "friends")}
            <RightSideContacts Icon={me} title='Marko'></RightSideContacts>
            <RightSideContacts Icon={me} title='Bob'></RightSideContacts>
            <RightSideContacts Icon={me} title='Lucci'></RightSideContacts>
            <RightSideContacts Icon={me} title='Sal'></RightSideContacts>
            <RightSideContacts Icon={me} title='Morgan'></RightSideContacts>
        </div>
    )
}
