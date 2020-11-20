import React from 'react';
import './Integrante.css';

//Images
import integrante1 from '../images/integrante1.jpg';
import integrante2 from '../images/integrante2.jpg';
import integrante3 from '../images/integrante3.jpg';

function Integrante(){
    return (
        <div>
            <section id="speakers" className="wow fadeInUp">
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
                            <p>Director General</p>
                            <div className="social">
                            <a href="">kk<i className="fa fa-twitter"></i></a>
                            <a href="">jj<i className="fa fa-facebook"></i></a>
                            <a href="">uu<i className="fa fa-google-plus"></i></a>
                            <a href="">yy<i className="fa fa-linkedin"></i></a>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="speaker">
                        <img src={integrante2} alt="Speaker 2" className="img-fluid"/>
                        <div className="details">
                            <h3><a href="speaker-details.html">Andrés Adarve</a></h3>
                            <p>Director de Desarrollo</p>
                            <div className="social">
                            <a href=""><i className="fa fa-twitter"></i></a>
                            <a href=""><i className="fa fa-facebook"></i></a>
                            <a href=""><i className="fa fa-google-plus"></i></a>
                            <a href=""><i className="fa fa-linkedin"></i></a>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="speaker">
                        <img src={integrante3} alt="Speaker 3" className="img-fluid"/>
                        <div className="details">
                            <h3><a href="speaker-details.html">Juan Castañeda</a></h3>
                            <p>Director creativo</p>
                            <div className="social">
                            <a href=""><i className="fa fa-twitter"></i></a>
                            <a href=""><i className="fa fa-facebook"></i></a>
                            <a href=""><i className="fa fa-google-plus"></i></a>
                            <a href=""><i className="fa fa-linkedin"></i></a>
                            </div>
                        </div>
                        </div>
                    </div>
                    
                    
                    </div>
                </div>

            </section>
        </div>
    );
}

export default Integrante;