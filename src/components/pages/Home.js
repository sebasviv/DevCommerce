import { faHome } from '@fortawesome/free-solid-svg-icons';
import Switch from 'react-bootstrap/esm/Switch'
import { Route, Router } from 'react-router-dom'
import React from 'react';
import '../../App.css'
import HeroSection from '../HeroSection'


function Home() {
    return (
        <>
            <HeroSection />
        </>
    );
}

export default Home;