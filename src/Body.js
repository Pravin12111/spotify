import React from 'react'
import "./Body.css"
import Header from "./Header"
import { useDataLayerValue } from './DataLayer'
import { PlayCircleFilled } from '@mui/icons-material'
import { Favorite } from '@mui/icons-material'
import { MoreHoriz } from '@mui/icons-material'
import SongRow from './SongRow';

function Body({spotify}) {

  const[{discover_weekly},dispatch] = useDataLayerValue();
  console.log(discover_weekly)
  return (
  
    <div className='body'>
        <Header spotify={spotify}/>

        <div className="body-info">
          <img src={discover_weekly?.images[0].url} alt=""/>
          <div className="body-info-text">
            <strong>PLAYLIST</strong>
            <h2>Discover<br/> Weekly</h2>
            <p>{discover_weekly?.description}</p>
          </div>
        </div>
        <div className="body-song">
          <div className="body-icon">
          <PlayCircleFilled
            className="body__shuffle"
          
          />
          <Favorite fontSize="large" />
          <MoreHoriz />
          </div>
          {
            discover_weekly?.tracks.items.map((item)=>(
              <SongRow track = {item.track}/>
            ))
          }
        </div>
    </div>
  )
}

export default Body
