
import React from 'react'
import me from './images/avatar.jpg'
import Cards from './cards'
import './CardMain.css'

export default function main() {
    return (
        <div className="main">
            <Cards 
            image='https://images.unsplash.com/photo-1617354839314-9476d4ca8a3d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80' 
            title='Bob' 
            profilePic={me}>
            </Cards>
            <Cards 
            image='https://images.unsplash.com/photo-1629747490810-990e918c684d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=688&q=80' 
            title='Mark' 
            profilePic={me}>
            </Cards>
            <Cards 
            image='https://images.unsplash.com/photo-1629627262857-5d53ffbcc650?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80' 
            title='Lucci' 
            profilePic={me}>
            </Cards>
            <Cards 
            image='https://images.unsplash.com/photo-1619863182792-ff9b20a5f886?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80' 
            title='Morgan' 
            profilePic={me}>
            </Cards>
            <Cards 
            image='https://images.unsplash.com/photo-1613182463807-bfef0ed31b94?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80' 
            title='Sal' 
            profilePic={me}>
            </Cards>
        </div>
    )
}
