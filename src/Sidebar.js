import React from 'react'
import "./Sidebar.css"
import SidebarOption from './SidebarOption';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from "@mui/icons-material/Search"
import LibraryIcon from "@mui/icons-material/LibraryMusic"
function Sidebar() {
return (
    <div className='sidebar'>
        <img src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="" className='sidebar-logo'/>

        <SidebarOption title="Home" Icon={HomeIcon}/>
        <SidebarOption title="Search"   Icon={SearchIcon}/>
        <SidebarOption title="Your Libraray"    Icon={LibraryIcon}/>

        <br/>
        <strong className='sidebar-title'>PLAYLISTS</strong>
        <hr/>
    </div>  
)
}

export default Sidebar
