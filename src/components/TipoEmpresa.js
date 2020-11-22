import React from 'react'
import './TipoEmpresa.css';

function Tipo(){
    return(
        <section id="subscribe">
        <div class="container wow fadeInUp">
            <div class="section-header text-center">
            <h2 className="m-4">Tipo de empresa<br/><b className="text-warning">Sociedad Colectiva</b></h2>
            <div className="linearoja"/>
            
            <p className="px-5 m-5">Es entre dos o más socios que serán solidarios, limitados y subsidiarios con sus obligaciones.
                 Para esta tipo de empresa es necesario que exista la profunda confianza entre los socios ya
                  que la administración puede recaer en ellos mismos o delegarla a un tercero. En este tipo 
                  de empresa, al ley no determina un monto mínimo ni máximo de capital para su constitución 
                  y se nombrará con el nombre de uno de los socios y la terminología 
                  “y compañía”, “y hermanos” o “e hijos”.</p>
            </div>
            
            

        </div>
        </section>
    );
}

export default Tipo;