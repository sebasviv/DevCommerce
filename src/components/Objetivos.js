import React from 'react'
import './Objetivos.css'

function Objetive() {
    return(
        <div className="bg-white">
        <div className="justify-content-center text-center" id="day-1">

            <div className="row schedule-item justify-content-center bg-warning p-5 m-0">
              
              <div className="col-md-10">
                <h4>Primer Objetivo</h4>
                <p>Ofrecer un servicio útil y de calidad para empresas.</p>
              </div>
            </div>

            <div className="row schedule-item justify-content-center bg-dark p-5 text-white m-0">
              
              <div className="col-md-10">
                
                <h4>Segundo Objetivo</h4>
                <p>Aumentar las ventas en las empresas con las que se colabore.</p>
              </div>
            </div>

            <div className="row schedule-item justify-content-center azul p-5 text-white m-0">
              
              <div className="col-md-10">
                
                <h4>Tercer Objetivo</h4>
                <p className="mb-0">Realizar los requerimientos necesarios para DevCommerce durante el segundo semestre de 2020.</p>
                <p className="subtitulo m-0 p-0">Incluyendo <b>Documentación</b> necesaria y una <b>Página web de la empresa</b> </p>
              </div>
            </div>

            

          </div>
          </div>
    );
}

export default Objetive;