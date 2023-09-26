import React from 'react'
import '../styles/cardTwo.scss'

const CardComponent = ({img, title, text}) => {


  return (
    <div className='card_card'>
    <div className='card_imgContainer'>
      <img
        src={img}
        width='100%'
        height='100%'
        alt='im'
        style={{
          objectFit: 'cover',
      }}
      />
    </div>
    <div className='card_contentsContainer'>
    <h1 className='card_hdr'>
      {title}
    </h1>
      <p className="card_text">
        {text}
      </p>
    </div>
    </div>
  )
}

export default CardComponent