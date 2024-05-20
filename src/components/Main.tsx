import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import BgParticles from './BgParticles';
import BgCircle from './BgCircle';
import killua from "../../public/images/killua.png"
import { userData } from '../data/data';

const Main = () => {
  const [text] = useTypewriter({
    words: ['Hello, my name is Josh Ivan', 'And I am a Junior Front End Developer'],
    loop: true,
    delaySpeed: 3000,
  })

  return (
    <div className='main' id="main">
      <BgParticles />
      <BgCircle />
      <img 
        src={killua} 
        alt="killua" 
        className='main-avatar' 
        width={200}
        height={200}
        style={{ objectFit: 'cover' }}
      />
      <div className="main-content">
          <h2 className='main-job-title'>{userData.destination}</h2>
          <h1 className='main-typing-text'>
            <span>{text}</span>
            <Cursor cursorColor='#F7AB0A' />
          </h1>
      </div>
    </div>
  )
}

export default Main;
