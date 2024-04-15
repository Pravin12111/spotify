import React from 'react'
import "./Sidebar.css"
import SidebarOption from './SidebarOption';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from "@mui/icons-material/Search"
import LibraryIcon from "@mui/icons-material/LibraryMusic"
import { useDataLayerValue } from './DataLayer';


function Sidebar() {
    const [{ playlists }, dispatch] = useDataLayerValue();

return (
    <div className='sidebar'>
        <img src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="" className='sidebar-logo'/>

        <SidebarOption title="Home" Icon={HomeIcon}/>
        <SidebarOption title="Search"   Icon={SearchIcon}/>
        <SidebarOption title="Your Libraray"    Icon={LibraryIcon}/>

        <br/>
        <strong className='sidebar-title'>PLAYLISTS</strong>
        <hr/>

        {playlists?.items?.map((playlist)=>{
            <SidebarOption title={playlist.name}/>
})}
        
    </div>  
);
}

export default Sidebar
