import React from 'react'
import {Avatar} from '@material-ui/core'
import './cards.css'

export default function cards({profilePic, image, title}) {
    return (
        <div style={{backgroundImage: `url(${image})`}} className="cards">
            {<Avatar src={profilePic} className="card-avatar"></Avatar>}
            <h4>{title}</h4>
        </div>
    )
}
