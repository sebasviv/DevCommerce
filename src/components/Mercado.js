import React from 'react'
import './Mercado.css'

//Imagenes
import img1 from '../images/competencia/shopify.png'
import img2 from '../images/competencia/puntogcolombia.png'
import img3 from '../images/competencia/BigCommerce.png'
import img4 from '../images/competencia/ecommercefactory.jpg'
import img5 from '../images/competencia/vendesfacil.png'

function Mercado(){
    return(
        <section id="supporters" className="section-with-bg wow fadeInUp azul-transparent">

        <div className="container">
            <div className="section-header text-white text-center">
            <h2>Estudio de Mercado</h2>
            <div className="linearoja my-4"></div>
            <p>Existen varios competidores para DevCommerce. Cada uno de estos tiene un enfoque en particular.</p>
            </div>

            <div className="row no-gutters clearfix d-flex justify-content-center">

            <div className="col-lg-3 col-md-4 col-xs-6">
                <div className="supporter-logo">
                <img src={img1} className="img-fluid" alt=""/>
                </div>
            </div>
            
            <div className="col-lg-3 col-md-4 col-xs-6">
                <div className="supporter-logo">
                <img src={img2} className="img-fluid" alt=""/>
                </div>
            </div>
            
            <div className="col-lg-3 col-md-4 col-xs-6">
                <div className="supporter-logo">
                <img src={img3} className="img-fluid" alt=""/>
                </div>
            </div>
            
            <div className="col-lg-3 col-md-4 col-xs-6">
                <div className="supporter-logo">
                <img src={img4} className="img-fluid" alt=""/>
                </div>
            </div>
            
            <div className="col-lg-3 col-md-4 col-xs-6">
                <div className="supporter-logo">
                <img src={img5} className="img-fluid" alt=""/>
                </div>
            </div>
            
            

            </div>

        </div>

        </section>
    );
}

export default Mercado;