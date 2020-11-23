import React from 'react';
import './Integrante.css';

//Images
import integrante1 from '../../images/integrante1.jpg';
import integrante2 from '../../images/integrante2.jpg';
import integrante3 from '../../images/integrante3.jpg';
import Organigrama from '../../images/organigrama.png';
import M_y_V from '../MisionYVision';

import 'bootstrap/dist/css/bootstrap.min.css';
import ParticlesScreen from '../ParticlesScreen';

function Integrante() {
    return (
        <div className="bg ">
            <ParticlesScreen
                style={{ position: "absolute" }}
                width="100%"
                height="200%"
            ></ParticlesScreen>
            <section id="speakers" className="wow fadeInUp ">
                <div className="container">
                    <div className="section-header">
                        <h1 className="text-center">Integrantes DevCommerce</h1>
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
                                <img src={integrante2} alt="Speaker 2" className="img-fluid" />
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
                                <img src={integrante3} alt="Speaker 3" className="img-fluid" />
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
                <div>
                    <M_y_V/>
                </div>

            </section>

            <section>
                <div className="title text-center">
                    <h1 >¿Como nos organizamos?</h1>
                </div>

                <div className="text-center">
                    <img src={Organigrama} className="org img-fluid rounded mx-auto d-block" />
                </div>

            </section>

        </div>
    );
}

export default Integrante;