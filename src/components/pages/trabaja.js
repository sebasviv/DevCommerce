import React from 'react'
import './trabaja.css';
import ReactGoogleSlides from "react-google-slides";
import '@phuocng/react-pdf-viewer/cjs/react-pdf-viewer.css';
import ParticlesScreen from '../ParticlesScreen';


function trabaja() {
    return (
        <div className="bgtrabaja">
            <ParticlesScreen
                    style={{ position: "absolute" }}
                    width="100%"
                    height="100%"
                ></ParticlesScreen>
            <div>
                <h1 className="text-center h2">Trabaja con nosotros</h1>

                <h2 className="text-center h4"> Estos son los contratos que tenemos para ti</h2>
            </div>
            <div className="text-center google">
            <ReactGoogleSlides
                        width={740}
                        height={580}
                        slidesLink="https://docs.google.com/presentation/d/1oluRNVe99Qmq2WMWFxsb1rDtRjKWFgK1/edit#slide=id.gad03ec3b29_2_381"
                        slideDuration={5}
                        showControls
                        loop
                    />
            </div>
        </div>
    )
}

export default trabaja;
