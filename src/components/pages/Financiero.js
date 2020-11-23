import React from 'react';
import '../pages/financiero.css';
import video from '../../videos/Texture1.mp4';

function Financiero() {
    return (
        <div id="EstadosF">
            <div className="fondoAnimado">
                <h2 className="text-header text-center text-light">Estados financieros</h2>
                <video autoPlay loop muted src={video} type="video/mp4" />
            </div>
            <div className="bgfinancieros">
                <h2 className="text-center pt-5 text-uppercase font-weight-bold">Activo</h2>
                <h4 className="tabla-name display-4 white"><b>Activo circulante</b></h4>
                <div className="container tabla bg-dark text-white p-0">
                    <div className="row d-flex justify-content-between m-0 p-1 px-4">
                        <h5 className="my-auto">Caja</h5>
                        <p className="my-auto">$1 500 000</p>
                    </div>

                    <div className="row d-flex justify-content-between m-0 p-1 px-4 bg-secondary">
                        <h5 className="my-auto">Bancos</h5>
                        <p className="my-auto">$10 000 000</p>
                    </div>

                    <div className="row d-flex justify-content-between m-0 p-1 px-4">
                        <h5 className="my-auto">Inversiones a corto plazo</h5>
                        <p className="my-auto">$0</p>
                    </div>

                    <div className="row d-flex justify-content-between m-0 p-1 px-4 bg-secondary">
                        <h5 className="my-auto">Cuentas por cobrar</h5>
                        <p className="my-auto">$15 000 000</p>
                    </div>

                    <div className="row d-flex justify-content-between m-0 p-1 px-4">
                        <h5 className="my-auto">Inventario</h5>
                        <p className="my-auto">$0</p>
                    </div>

                    <div className="row d-flex justify-content-between m-0 p-1 px-4 bg-primary">
                        <h5 className="my-auto">Total Activo Circulante</h5>
                        <p className="my-auto">$26 500 000</p>
                    </div>
                </div>
                {/*Siguiente*/}
                <h4 className="tabla-name display-4 white"><b>Activo fijo</b></h4>
                <div className="container tabla bg-dark text-white p-0">
                    <div className="row d-flex justify-content-between m-0 p-1 px-4">
                        <h5 className="my-auto">Edificios</h5>
                        <p className="my-auto">$0</p>
                    </div>

                    <div className="row d-flex justify-content-between m-0 p-1 px-4 bg-secondary">
                        <h5 className="my-auto">Terrenos</h5>
                        <p className="my-auto">$0</p>
                    </div>

                    <div className="row d-flex justify-content-between m-0 p-1 px-4">
                        <h5 className="my-auto">Depreciación acumulada</h5>
                        <p className="my-auto">$0</p>
                    </div>

                    <div className="row d-flex justify-content-between m-0 p-1 px-4 bg-secondary">
                        <h5 className="my-auto">Mobiliario y equipo</h5>
                        <p className="my-auto">$4 500 000</p>
                    </div>

                    <div className="row d-flex justify-content-between m-0 p-1 px-4">
                        <h5 className="my-auto">Depreciación acumulada</h5>
                        <p className="my-auto">-$450 000</p>
                    </div>

                    <div className="row d-flex justify-content-between m-0 p-1 px-4 bg-secondary">
                        <h5 className="my-auto">Equpo de transporte</h5>
                        <p className="my-auto">$0</p>
                    </div>

                    <div className="row d-flex justify-content-between m-0 p-1 px-4">
                        <h5 className="my-auto">Depreciación acumulada</h5>
                        <p className="my-auto">$0</p>
                    </div>

                    <div className="row d-flex justify-content-between m-0 p-1 px-4 bg-secondary">
                        <h5 className="my-auto">Equipo de cómputo</h5>
                        <p className="my-auto">$11 000 000</p>
                    </div>

                    <div className="row d-flex justify-content-between m-0 p-1 px-4">
                        <h5 className="my-auto">Depreciación acumulada</h5>
                        <p className="my-auto">-$2 200 000</p>
                    </div>

                    <div className="row d-flex justify-content-between m-0 p-1 px-4 bg-primary">
                        <h5 className="my-auto">Total Activo Fijo</h5>
                        <p className="my-auto">$12 850 000</p>
                    </div>
                </div>
                {/*Siguiente*/}
                <h4 className="tabla-name display-4 white"><b>Activo diferido</b></h4>
                <div className="container tabla bg-dark text-white p-0">
                    <div className="row d-flex justify-content-between m-0 p-1 px-4">
                        <h5 className="my-auto">Rentas pagadas por anticipado</h5>
                        <p className="my-auto">$2 100 000</p>
                    </div>

                    <div className="row d-flex justify-content-between m-0 p-1 px-4 bg-secondary">
                        <h5 className="my-auto">Otros activos diferidos</h5>
                        <p className="my-auto">$254 000</p>
                    </div>

                    <div className="row d-flex justify-content-between m-0 p-1 px-4 bg-primary">
                        <h5 className="my-auto">Total Activo Diferido</h5>
                        <p className="my-auto">$2 354 000</p>
                    </div>
                </div>
                {/*Total Activos */}
                <div className="row bg-dark mx-0 mt-4 p-0 d-flex justify-content-center">
                    <h3 className="text-light p-5 display-4 white">Suma del activo: $41 704 000</h3>
                </div>
                {/**Siguiente */}
                <h2 className="text-center pt-5 text-uppercase font-weight-bold">Pasivo</h2>
                <h4 className="tabla-name display-4 white"><b>Pasivo Circulante</b></h4>
                <div className="container tabla bg-dark text-white p-0">
                    <div className="row d-flex justify-content-between m-0 p-1 px-4">
                        <h5 className="my-auto">Proveedores</h5>
                        <p className="my-auto">$0</p>
                    </div>

                    <div className="row d-flex justify-content-between m-0 p-1 px-4 bg-secondary">
                        <h5 className="my-auto">Acreedores</h5>
                        <p className="my-auto">$5 000 000</p>
                    </div>

                    <div className="row d-flex justify-content-between m-0 p-1 px-4">
                        <h5 className="my-auto">Intereses por pagar</h5>
                        <p className="my-auto">$797 000</p>
                    </div>

                    <div className="row d-flex justify-content-between m-0 p-1 px-4 bg-secondary">
                        <h5 className="my-auto">ISR por pagar</h5>
                        <p className="my-auto">$2 400 000</p>
                    </div>

                    <div className="row d-flex justify-content-between m-0 p-1 px-4">
                        <h5 className="my-auto">Anticipos de clientes</h5>
                        <p className="my-auto">$5 000 000</p>
                    </div>

                    <div className="row d-flex justify-content-between m-0 p-1 px-4 bg-primary">
                        <h5 className="my-auto">Total Activo Circulante</h5>
                        <p className="my-auto">$13 197 000</p>
                    </div>
                </div>
                {/**Siguiente */}
                <h4 className="tabla-name display-4 white"><b>Pasivo a largo plazo</b></h4>
                <div className="container tabla bg-dark text-white p-0">
                    <div className="row d-flex justify-content-between m-0 p-1 px-4">
                        <h5 className="my-auto">Documentos por pagar a largo plazo</h5>
                        <p className="my-auto">$507 000</p>
                    </div>

                    <div className="row d-flex justify-content-between m-0 p-1 px-4 bg-primary">
                        <h5 className="my-auto">Total Pasivo Circulante</h5>
                        <p className="my-auto">$507 000</p>
                    </div>
                </div>
                {/**Total pasivo */}
                <div className="row bg-dark mx-0 mt-4 p-0 d-flex justify-content-center">
                    <h3 className="text-light p-5">Suma del pasivo: $13 704 000</h3>
                </div>
                {/**Siguiente */}
                <h2 className="text-center pt-5 text-uppercase font-weight-bold">Capital</h2>
                <h4 className="tabla-name display-4 white"><b>Capital Contable</b></h4>
                <div className="container tabla bg-dark text-white p-0">
                    <div className="row d-flex justify-content-between m-0 p-1 px-4">
                        <h5 className="my-auto">Capital social</h5>
                        <p className="my-auto">$20 000 000</p>
                    </div>

                    <div className="row d-flex justify-content-between m-0 p-1 px-4 bg-secondary">
                        <h5 className="my-auto">Reservas</h5>
                        <p className="my-auto">$0</p>
                    </div>

                    <div className="row d-flex justify-content-between m-0 p-1 px-4">
                        <h5 className="my-auto">Resultados de ejercicios anteriores</h5>
                        <p className="my-auto">$0</p>
                    </div>

                    <div className="row d-flex justify-content-between m-0 p-1 px-4 bg-secondary">
                        <h5 className="my-auto">Resultado del ejercicio</h5>
                        <p className="my-auto">$8 000 000</p>
                    </div>

                    <div className="row d-flex justify-content-between m-0 p-1 px-4 bg-primary">
                        <h5 className="my-auto">Total Capital Contable</h5>
                        <p className="my-auto">$28 000 000</p>
                    </div>
                </div>
                {/**Total capital */}
                <div className="row bg-dark mx-0 mt-4 p-0 d-flex justify-content-center">
                    <h3 className="text-light p-5">Suma del capital contable: $28 000 000</h3>
                </div>
                {/**Total Total */}
                <div className="row bg-warning mx-0 p-0 d-flex justify-content-center">
                    <h3 className="text-blue p-5">Suma del pasivo + Capital contable: $41 704 000</h3>
                </div>
            </div>
        </div>
    );
}
export default Financiero;