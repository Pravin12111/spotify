import React from 'react'
import "./Footer.css"
import { PlayCircleOutlined } from '@mui/icons-material/';
import { SkipPreviousOutlined } from '@mui/icons-material/';
import { SkipNextOutlined } from '@mui/icons-material/';
import { Shuffle } from '@mui/icons-material/';
import { Repeat } from '@mui/icons-material/';
//import { Grid ,Slider } from '@mui/icons-material/';
import { Box, Slider, IconButton } from '@mui/material';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';

function Footer() {
  return (
    <div className='footer'>
        <div className="footer-left">
            <img src="https://psfiles.com/wp-content/uploads/2022/01/PsFiles-Free-Spotify-Album-Cover-PSD-Template-02_FullView.jpg" alt=""
                    className='footer-album-logo'/>
            <div className="footer-song-info">
                <h4>Yeah!</h4>
                <p>Usher</p>
            </div>
            
        </div>

        <div className="footer-center">
            <Shuffle className="footer-green"/>
            <SkipPreviousOutlined className='footer-icon' />
            <PlayCircleOutlined fontSize='large' className='footer-icon'/>
            <SkipNextOutlined className='footer-icon'/>
            <Repeat className='footer-green'/>
        </div>

        <div className="footer-right">
        <Box className="spotify-footer">
      <IconButton className='footer-green'>
        <PlaylistPlayIcon />
      </IconButton>
      <Box className="slider-container">
        <Slider aria-label="Volume" />
      </Box>
      <IconButton className='footer-green'>
        <VolumeDownIcon />
      </IconButton>
    </Box>
        </div>
    </div>
)
}

export default Footer
