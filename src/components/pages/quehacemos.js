import React from 'react'
import "../pages/quehacemos.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactGoogleSlides from "react-google-slides";





function quehacemos() {
    return (


        <div>
            <div>
                <div >
                    <div className="text-center title ">
                        <h1> Nuestros Objetivos</h1>
                    </div>
                </div>

                <div className="container-objetives">
                    <div className="objetives">
                        <p>1. Ofrecer un servicio útil y de calidad para empresas.</p>
                        <p>2. Aumentar las ventas en las empresas con las que se colabore.</p>
                        <p>3. Realizar los requerimientos necesarios para DevCommerce durante el segundo semestre de 2020. </p>
                    </div>
                </div>
                <div className="text-center title">
                    <h2>Nuestro Servicio</h2>
                </div>
                <div className="text-center">

                    <p>
                        tiendas de e-commerce personalizado para las empresas, <br></br> compañías u organizaciones que busquen expandir su público objetivo en el ambiente electrónico, <br></br> intrascendente del producto o servicio que se comercialice.
                </p>
                </div>

                <div className="text-center title">
                    <h2>Tenemos todo planeado para ti...</h2>
                </div>

                <div className="googleslides">
                    <ReactGoogleSlides
                        width={740}
                        height={580}
                        slidesLink="https://docs.google.com/presentation/d/1fiY1Dpps4jpr5NgXlL2Ko_GOX0XvUL1qFQBY89gR4lc/edit?usp=sharing"
                        slideDuration={5}
                        showControls
                        loop
                    />
                </div>
            </div>
        </div>
    )
}

export default quehacemos
