import React from 'react'
import {Link} from 'react-router-dom';
import './style.css';

const NotFound = () => {
  return (
    <div className='not-found-container'>
        <img 
            src="https://res.cloudinary.com/dkwefqjnn/image/upload/v1660704261/Layer_1_c8ydvi.png" 
            alt="not-found-image" 
            className='not-found-image' />
        <h1 className='not-found-heading'>Page Not Found</h1>
        <p className='not-found-description'>we are sorry, the page you requested could not be found Please go back to the homepage</p>
        <Link to = '/'>
            <button
                type='button'
                className='home-page-btn'
            >Home Page</button>
        </Link>
    </div>
  )
}

export default NotFound;