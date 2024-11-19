import React from 'react'
import './Photos.css'

const Photos = () => {
  return (
    <>
    <div className="photo">
      <ul>
        <li>
          <img src='/images/dog1.webp'/>
        </li>
        <li><img src='/images/cat.webp'/></li>
        <li><img src='/images/dogcat.webp'/></li>
        <li><img src='/images/dog2.webp'/></li>
    </ul>
    </div>
    <h1>Friend Offers &gt;</h1>

    </>
  )
}

export default Photos