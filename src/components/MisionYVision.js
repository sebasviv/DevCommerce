import React from 'react'
import './MyV.css'

function M_y_V(){
    return(
        <section id="hotels" className="section-with-bg wow fadeInUp">

        <div className="container-fluid text-center">
            <div className="section-header text-light">
            <h2>Los Objetivos DevCommerce</h2>
            <p className="text-warning">Tus clientes al alcance de tus manos. </p>
            </div>

            <div className="row justify-content-center align-items-center h-100">

            <div className="col-lg-4 col-md-6 bg-white box d-flex m-2 cardsize">
                <div className="hotel box-inner">
                
                <h3>Misión</h3>
                
                <p>La empresa busca llevar los servicios de comercio electrónico 
                    personalizado a las empresas, compañías u organizaciones con el propósito 
                    de impulsar la economía desde el contexto digital.</p>
                </div>
            </div>

            <div className="col-lg-4 col-md-6 bg-white box d-flex m-2 cardsize">
                <div className="hotel box-inner">
                    
                
                <h3>Visión</h3>
                
                <p>Ser una empresa reconocida en el territorio nacional por la calidad de 
                    los productos ofrecidos. 
                    </p>
                </div>
            </div>

            
            

            </div>
        </div>

        </section>
    );
}

export default M_y_V;