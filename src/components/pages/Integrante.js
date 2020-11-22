import React from 'react';
import './Integrante.css';

//Images
import integrante1 from '../../images/integrante1.jpg';
import integrante2 from '../../images/integrante2.jpg';
import integrante3 from '../../images/integrante3.jpg';
import M_y_V from '../MisionYVision';

function Integrante(){
    return (
        <div>
            <section id="speakers" className="wow fadeInUp bg-white">
                <div className="container">
                    <div className="section-header">
                        <h2>Nosotros</h2>
                        <p>Integrantes DevCommerce</p>
                    </div>

                    <div className="row align-items-end">
                    <div className="col-lg-4 col-md-6">
                        <div className="speaker">
                        <img src={integrante1} alt="Speaker 1" className="img-fluid" />
                        <div className="details">
                            <h3><a href="speaker-details.html">Sebastian Viveros</a></h3>
                            <div className="social">
                            <p>Director General</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="speaker">
                        <img src={integrante2} alt="Speaker 2" className="img-fluid"/>
                        <div className="details">
                            <h3><a href="speaker-details.html">Andrés Adarve</a></h3>
                            
                            <div className="social">
                            <p>Director de Desarrollo</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="speaker">
                        <img src={integrante3} alt="Speaker 3" className="img-fluid"/>
                        <div className="details">
                            <h3><a href="speaker-details.html">Juan Castañeda</a></h3>
                            
                            <div className="social">
                            <p>Director creativo</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    
                    
                    </div>
                </div>

            </section>

            <section>
                <div>
                    <M_y_V/>
                </div>
            </section>
        </div>
    );
}

export default Integrante;