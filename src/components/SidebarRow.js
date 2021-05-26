import React from 'react'
import '../css/SidebarRow.css'

function SidebarRow({ isActive, newMsg, Icon, title }) {
    return (
        <div className={`sidebarRow ${isActive}`}>
            {Icon && <Icon />}

            <h6>{title}</h6>
            {newMsg? <div className={`${newMsg}`}></div>:<p></p>}
        </div>
    )
}

export default SidebarRow
