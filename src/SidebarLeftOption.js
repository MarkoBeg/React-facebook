import React from 'react'
import './SidebarLeftOption.css'

export default function SidebarLeftOption({Icon,title, color}) {
    return (
        <div className="SidebarLeftOption">
            {Icon && <Icon style={{color: color}}></Icon> }
            <h4>{title}</h4>
        </div>
    )
}
