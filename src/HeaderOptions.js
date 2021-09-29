import React from 'react'
import './HeaderOptions.css'

export default function HeaderOptions({Icon, title}) {
    return (
        <div className="header-options">
            {Icon && <Icon></Icon>}
            <h4>{title}</h4>
        </div>
    )
}
