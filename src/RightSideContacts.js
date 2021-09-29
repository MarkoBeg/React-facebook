import React from 'react'
import {Avatar} from '@material-ui/core'
import './RightSideContacts.css'

export default function RightSideContacts({Icon, title}) {
    return (
        <div className="contacts">
            {Icon && <Avatar src={Icon} className="avatar-right"></Avatar>}
            <p>{title}</p>
        </div>
    )
}
