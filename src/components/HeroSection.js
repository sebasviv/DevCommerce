
import React from 'react';
import './HeroSection.css';
import '../App.css';
import { Button } from './Button';
import video from '../videos/videodev.mp4';
import { Link } from 'react-router-dom';


function HeroSection() {
  return (
    <div className='hero-container'>
      <video autoPlay loop muted src={video} type="video/mp4" />
      <h1>DevCommerce</h1>
      <p>Tus clientes al alcance de tus manos.</p>
      <div className='hero-btns'>
        <Link to='/quienessomos'>
          <Button
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
          >
            ¿Quiénes Somos?
          </Button>
        </Link>
        <Button
          className='btns'
          buttonStyle='btn-inverso'
          buttonSize='btn--large'
        >
          ¿Qué hacemos?
          </Button>
      </div>
    </div>
  );
}

export default HeroSection;