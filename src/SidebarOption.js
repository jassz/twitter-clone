import React from 'react';
import './SidebarOption.css'

function SidebarOption({ text, Icon, active }) {
    return ( 
        <div className={`sidebarOptions ${active && 'sidebarOptions--active'}`}>
            <Icon />
            <h2 className='text-margin'>{text}</h2>
        </div>
     );
}

export default SidebarOption;