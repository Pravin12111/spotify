import React from 'react'
import "./Body.css"
import Header from "./Header"
function Body(spotify) {
  return (
    <div className='body'>
        <Header spotify={spotify}/>

        <div className="body-info">
          <img src="https://res.cloudinary.com/upwork-cloud/image/upload/c_scale,w_1000/v1704014010/catalog/1741169204515356672/diukytilmshsl8xj21f1.jpg" alt=""/>
          <div className="body-info-text">
            <strong>PLAYLIST</strong>
            <h2>Discover<br/> Weekly</h2>
            <p>description...</p>
          </div>
        </div>
    </div>
  )
}

export default Body
