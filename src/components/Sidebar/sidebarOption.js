import React from "react";
import "../../components/Sidebar/sidebarOption.css";
import {Link} from 'react-router-dom'
// import SidebarOption from './sidebarOption';

function SidebarOption({ active, text, Icon, url }) {
  return (
    <Link to={url} style={{color:'#000000', textDecoration: 'none'}}>
      <div className={`sidebarOption ${active && "sidebarOption--active"}`}>
        {/* {active && <h2 className="circle"></h2>} */}
        <Icon />
        <span className="text-base">{text}</span>
      </div>
    </Link>

  );
}

export default SidebarOption;
