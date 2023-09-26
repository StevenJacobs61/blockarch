import '../styles/cardTwo.scss'
import React from 'react'
import CardComponent from './cardComponent'
import MatchingImage from '../img/ai-matching.jpg';
import ArchImage from '../img/ai-arch.jpg';
import { ReactComponent as Chevron } from '../svg/chevron.svg';
import ComingSoon from '../img/comingSoon.jpg';

const CardAreaTwo = () => {


  return (
    <div className='cardArea_container'>
      <div className='cardArea_cardContainer'>
        <CardComponent 
            img={MatchingImage} 
            title={'AI Matching'}
            text={'With just a few inputs, Blockarch will match the most appropriate blockchain for your business idea. Architect and build your business with confdence.'}
             />   
        <button className='cardArea_button'>Get Started <Chevron className='cardArea_chevron'/></button>
      </div>
      <div className='cardArea_cardContainer'>
        <CardComponent
            img={ArchImage} 
            title={'AI Architecting'}
            text={'Architect your blockchain business idea with ease. Blockarch will architect your solution enabling you to quickly launch, grow and test your ideas.'}
            />    
        <img src={ComingSoon} alt='coming soon' className='cardArea_comingSoon'/>
    </div>
    </div>
  )
}

export default CardAreaTwo;