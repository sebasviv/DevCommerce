
import React from 'react';
import './HeroSection.css';
import '../App.css';
import { Button } from './Button';
import video from '../videos/videodev.mp4';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Particles from 'react-particles-js';
import ParticlesScreen from './ParticlesScreen';


function HeroSection() {
  return (
    <div className='hero-container overflow-hidden'>
       <ParticlesScreen
            style={{ position: "absolute" }}
            width="100%"
            height="100%"
        />
      <video autoPlay loop muted src={video} type="video/mp4" className="overflow-hidden" />
      
      <h1>DevCommerce</h1>
      <p>Tus clientes al alcance de tus manos.</p>
      <div className='hero-btns'>
        <Link to='/quienessomos'>
          <button className="btn btn-light"
          >
            ¿Quiénes Somos?
          </button>
        </Link>
        <Link to='/quehacemos'>
          <button className='btn btn-dark'>
            ¿Qué hacemos?
          </button>
        </Link>
      </div>
    </div>
  );
}

export default HeroSection;