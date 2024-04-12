import React from 'react'
import './Header.css';
import { Search } from '@mui/icons-material';


function Header() {
  return (
    <div className='header'>
        <div className="header-left">
            <Search/>
            <input type="text"  placeholder='search for Artists , Songs,Playlists'/>
        </div>
        <div className="header-right">

        </div>
    </div>
  )
}

export default Header
