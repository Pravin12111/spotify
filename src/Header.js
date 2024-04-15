import React from 'react'
import './Header.css';
import { Search } from '@mui/icons-material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useDataLayerValue } from "./DataLayer";
function Header() {
    const[{user},dispatch] = useDataLayerValue();
  return (
    <div className='header'>
        <div className="header-left">
            <Search/>
            <input type="text"  placeholder='search for Artists , Songs or Playlists'/>
        </div>
        <div className="header-right">
            <AccountCircleIcon src={user?.images[0]?.url} alt={user?.display_name}/>
            <h4>{user?.display_name}</h4>
        </div>
    </div>
  )
}

export default Header
